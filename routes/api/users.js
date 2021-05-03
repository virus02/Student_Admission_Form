const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const User = require("../../model/users");

router.get("/", (req, res) => {
    User.find()
        .sort({ date: -1 })
        .then((users) => res.status(200).send(users));
});

router.post("/", (req, res) => {
    //Validation
    if (
        !req.body.first_name ||
        !req.body.last_name ||
        !req.body.email ||
        !req.body.password ||
        !req.body.doj
    ) {
        return res.status(400).send({
            status: "Fill all the fields",
        });
    }
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        doj: req.body.doj,
    });
    // create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
            user.save()
                .then((user) => {
                    res.send(user);
                })
                .catch((err) => {
                    res.status(500).send({
                        status:
                            err.show ||
                            "Some error occurred while creating the User.",
                    });
                });
        });
    });
});

router.get("/:id", (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    status: "User not found",
                });
            }
            res.status(200).send(user);
        })
        .catch((err) =>
            res.status(500).send({
                status: "Error while retriving user info",
            })
        );
});

router.put("/:id", (req, res) => {
    if (
        !req.body.first_name ||
        !req.body.last_name ||
        !req.body.email ||
        !req.body.doj
    ) {
        return res.status(400).send({
            status: "Required fields are empty",
        });
    }
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    status: "User not found",
                });
            }
            res.status(201).send(user);
        })
        .catch((err) => {
            return res.status(500).send({
                status:
                    err.show || "Some error occured while updating user info",
            });
        });
});

router.delete("/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    status: "User not found",
                });
            }
            res.status(200).send({
                status: "success",
            });
        })
        .catch((err) => {
            return res.status(500).send({
                status:
                    err.show || "Some error occured while updating user info",
            });
        });
});

module.exports = router;
