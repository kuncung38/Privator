const mongoose = require("mongoose");
const argon2 = require("argon2");

const instructorModel = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "fullName is required"],
        },
        email: {
            type: String,
            required: [true, "email is required"],
            validate: {
                validator: function (value) {
                    let validRegex =
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    return value.match(validRegex) ? true : false;
                },
                message: "Invalid email format",
            },
        },
        password: {
            type: String,
            required: [true, "passsword is required"],
        },
        bio: {
            type: String,
        },
        birthData: {
            type: Date,
        },
        phoneNumber: {
            type: String,
        },
        address: {
            type: String,
        },
        profilePicture: {
            type: String,
            set: (value) => {
                if (!value) {
                    return "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";
                } else {
                    return value;
                }
            },
        },
        profileBanner: {
            type: String,
        },
        location: {
            type: {
                type: String,
                enum: ["Point"],
            },
            coordinates: {
                type: [Number],
            },
        },
    },
    {
        timestamps: true,
    }
);

instructorModel.methods.matchPassword = async function (password) {
    return await argon2.verify(this.password, password);
};

instructorModel.pre("save", async function (next) {
    try {
        if (!this.isModified()) {
            next();
        } else {
            this.password = await argon2.hash(this.password);
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const Instructor = mongoose.model("Instructor", instructorModel);
module.exports = Instructor;
