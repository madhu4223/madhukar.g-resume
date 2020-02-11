
const Reset = "\x1b[0m"
const Bright = "\x1b[1m"
const Dim = "\x1b[2m"
const Underscore = "\x1b[4m"
const Blink = "\x1b[5m"
const Reverse = "\x1b[7m"
const Hidden = "\x1b[8m"

const FgBlack = "\x1b[30m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const FgBlue = "\x1b[34m"
const FgMagenta = "\x1b[35m"
const FgCyan = "\x1b[36m"
const FgWhite = "\x1b[37m"

const BgBlack = "\x1b[40m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"

const line_break = '\n';

exp_details = [
    // {
    //     Name:'Premiere Digital Exchange',
    //     Description: 'Premiere Digital Services operates as a digital media distribution and software company. The Company offers' + 
    //           'cloud-based digital asset delivery and content optimisation solutions that enable content ingestion, preparation,' + 
    //           'management, and distribution of media assets to mobile and broadcast markets.',
    //     Duration:'Apr 2019 to Present'
    // },
    {
        Name:'Premiere Digital Exchange',
        Description: 'Premiere Digital Services operates as a digital media distribution and software company.',
        Duration:'Apr 2019 to Present'
    },
    {
        Name: 'ESSEXINDIA',
        Description: 'ESSEXINDIA is a digital intermediary between genuine buyers and verified sellers.',
        Duration: 'Jun 2018 to Apr 2019'
    },
    {
        Name: 'Way2Links',
        Description: 'Building a platform which allows the users to earn money from their own web content automatically through' +
              'affiliate marketing.',
        Duration: 'Dec 2017 to May 2018'
    }
]

project_details = [
    {
        Name: 'Design and Verification of AES algorithm',
        Description: 'AES is an advanced algoithm for encrypting the data.This is a subset of the Rijndael block cipher.',
        Duration: 'May 2017 to Jun 2017'
    },
    {
        Name: 'Solar Tracking System',
        Description: 'We team of seven people came up with a model of Solar Tracking System for increasing the efficiency' +
                     'of the solar panel.',
        Duration: 'February 2017'
    }
]

skill_details = [
    {
        Name: 'C, Core Java, Nodejs, Angular 2+, HTML, Javascript, Typescript, Ajax',
        Level:'Advanced'
    },
    {
        Name: 'Python, CSS',
        Level:'Intermediate'
    }
]

education_details = [
    {
        Course: 'Department of Electronics and communicaton Engineering',
        College: 'RGUKT(IIIT) BASAR',
        Year: '2014–2018'
    },
    {
        Course: 'Pre-University Course(M.P.C)',
        College: 'RGUKT(IIIT) BASAR',
        Year: '2012-2014'
    },
    {
        Course: 'Matriculation',
        College: 'Z.P High School Narsimhulapally',
        Year: '2011-2012'
    }
]


module.exports = {
    getResume : function (){

        // Name
        console.log(line_break,line_break,line_break,line_break)
        console.log(FgBlue,Bright,"                                                                                        MADHUKAR GURRAM",line_break)
        console.log(FgCyan,Bright,'                                                                                    Senior Software Engineer',line_break,line_break)
        
        //Study
        console.log(FgWhite,Bright,"Education:")
        console.log(line_break)
        console.table(education_details)
        console.log(line_break,line_break,line_break)

        // Experience
        console.log(FgWhite,Bright,"Experience: ")
        console.log(line_break)
        console.table(exp_details)
        console.log(line_break,line_break)

        // Projects
        console.log(FgWhite,Bright,"Projects:")
        console.log(line_break)
        console.table(project_details)
        console.log(line_break,line_break)

        //Skills
        // console.log(FgWhite,Bright,"Skills:")
        // console.log(line_break)
        // console.table(skill_details)
        // console.log(line_break,line_break)

        console.log(FgWhite,Bright,"Skills:")
       

    },



}