import mongoose from 'mongose'

const DoctorStayHour = new mongoose.Schema({
    Stay: {
        type: Number
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true,
    },
    experienceInYears: {
        type: Number,
        default: 0
    },
    worksInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectIn,
            ref: "Hospital"
        },
        {
            DoctorStayHour
        }
    ]
}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema)