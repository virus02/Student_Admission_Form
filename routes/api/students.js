const express = require("express");
const router = express.Router();

//Student Model
const Student = require("../../model/students");

//@route GET api/student
//@desc GET All
//@acess public
router.get("/", (req, res) => {
    Student.find()
        .sort({ date: -1 })
        .then((students) => res.status(200).json(students));
});

//@route POST api/student
//@desc Create a student
//@acess private
router.post("/", (req, res) => {
    if (
        !req.body.first_name ||
        !req.body.last_name ||
        !req.body.dept ||
        !req.body.doj
    ) {
        return res.status(400).send({
            status: "Fill all the fields",
        });
    }
    const student = new Student({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dept: req.body.dept,
        doj: req.body.doj,
        created_by: 1,
    });
    student.save().then((student) => res.status(201).json(student));
});

//@route DELETE api/students/id
//@desc Delete a student
//@acess private
router.delete("/:id", (req, res) => {
    Student.findByIdAndRemove(req.params.id).then((student) => {
        if (!student) {
            return res.status(400).send({
                status: "Student not found",
            });
        }
        res.status(200).send({
            status: "Student deleted successfully",
        });
    });
});

//@route Detail api/students/id
//@desc Detail a student
//@acess private
router.get("/:id", (req, res) => {
    Student.findById(req.params.id)
        .then((student) => res.status(200).json(student))
        .catch((err) => res.status(404).json({ status: "Not found" }));
});

//@route PUT api/students/id
//@desc Update a student
//@acess private
router.put("/:id", (req, res) => {
    Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((student) => {
            if (!student) {
                return res.status(404).send({
                    status: "Student not found",
                });
            }
            res.status(201).send(student);
        })
        .catch((err) => res.status(400).status({ success: false }));
});

module.exports = router;
