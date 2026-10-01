const pdfParse = require("pdf-parse")
const generateInterviewReportController = require("../services/ai.services")



async function generateInterviewReportController (req,res){

    const resumeFile = req.file
    const resumeContent = pdfParse(req.file.buffer)
    const { selfDescription , jobDescription} = req.body

    const interviewReportByAi = await generateInterviewReportController({
        resume:resumeContent,
        selfDescription,
        jobDescription
    })
}



module.exports = {}