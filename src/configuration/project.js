import grcimage from '../assets/projects/topprojects/compliancemanager500.png'
import ospatching from '../assets/projects/topprojects/ospatching500.png'
import customerticket from '../assets/projects/topprojects/customerticket500.png'
import projectsandswitch from '../assets/projects/topprojects/sandtwitch500.png'
import s3costoptimise from '../assets/projects/topprojects/s3500.png'
import al2migration from '../assets/projects/topprojects/al2migration500.png'
export default function TopProjectarray() {
    const topprojects_array = [

   
        {
            projectid : "1"
        },
        
        {
        projectid : "00",
        projectTitle : "GRC Compliance Manager",
        projectLogo : grcimage,
        projectLink : "/projectsdetail?name=grccompliancemanager"
    },
    {
        projectid : "1"
    },
    
    {
    projectid : "01",
    projectTitle : "OS Patching",
    projectLogo : ospatching,
    projectLink : "/projectsdetail?name=ospatchingproject"
},
{
    projectid : "1"
},

{
projectid : "02",
projectTitle : "Customer Tickets",
projectLogo : customerticket,
projectLink : "/projectsdetail?name=customerticket"
},
{
    projectid : "r"
},
{
    projectid : "1"
},

{
projectid : "03",
projectTitle : "Project Sandswitch",
projectLogo : projectsandswitch,
projectLink : "/projectsdetail?name=projectsandwihch"
},
{
    projectid : "1"
},
{
    projectid : "04",
    projectTitle : "AL2 Migration",
    projectLogo : al2migration,
    projectLink : "/projectsdetail?name=al2migration"
    },
    {
        projectid : "1"
    },
    {
        projectid : "05",
        projectTitle : "S3 Cost Optimisation",
        projectLogo : s3costoptimise,
        projectLink : "/projectsdetail?name=s3costoptimisationproject"
        },

]

    return topprojects_array;
}

