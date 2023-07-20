import grcimage from '../assets/projects/topprojects/compliancemanager500.png'
export default function AllProjectarray() {
    const allprojects = [{
        "grccompliancemanager" : {
          "projectName" : "GRC Compliance Manager",
          "projectImage" : grcimage,
          "projectdescription" : {
          "intro" : `
          We received tickets from GRC team, whenever the changes happen in AWS resources through console. This tickets helps the GRC team to audit and capture justification for the changes made through console, the pain point in this ticket is GRC portal won’t give details of user who made the changes, we need locate the user manually. To get the user data we reached to GRC on-call initially and get user data from them through email or slack which will take 1-3 business to get response from on-call then we need to reach out the user who made changes and will resolve the ticket once we justification from the user
          `,
          "behave" : `
          I explored AWS and found a solution to locate the user details for S3 violations using event source and dynamoDB violations using ResourceName.
          `,
          "impact" : `
          By implementing this solution, there is no need to contact GRC on-call for user data. Also since we’re locating user data ourselves and  we can resolve the GRC ticket before SLA.
          `

          }
        }
    }
       
    ]

    return allprojects;
}