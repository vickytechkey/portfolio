import grcimage from '../assets/projects/topprojects/compliancemanager500.png'
import al2migration from '../assets/projects/topprojects/al2migration500.png'
import patchmamager from '../assets/projects/topprojects/ospatching500.png'
import customerticketimage from '../assets/projects/topprojects/customerticket500.png'
import projectsandtwitch from '../assets/projects/topprojects/sandtwitch500.png'
import s3costoptimisation from '../assets/projects/topprojects/s3500.png'
import sasrisk from '../assets/projects/sasrisk500.png'
import complianceaudit from '../assets/projects/grcaudit500.png'
import djsschedule from '../assets/projects/djsscheduler500.png'
import pipelinefailure from '../assets/projects/pipelinefailure500.png'
import acemsengine from '../assets/projects/acemsengine500.png'
import grcticketaudit from '../assets/projects/grcaudit500.png'
import grcweb from '../assets/projects/grcweb500.png'
import codereview from '../assets/projects/codereviews500.png'
import auditingl3 from '../assets/projects/auditingdart500.png'
import training from '../assets/projects/training500.png'
export default function AllProjectarray() {
    const allprojects = [
      {
        "grccompliancemanager" : {
          "projectName" : "GRC Compliance Manager",
          "projectImage" : grcweb,
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
        },
        "al2migration" : {
          "projectName" : "AL2 Migration",
          "projectImage" : al2migration,
          "projectdescription" : {
          "intro" : `
          In 2021 host owned by paper was running with Amazon_Linux_2012 OS, running outdated OS leads to security thread.
          To fix issue Amazon wide AL2 migration campaign was planned in 2021 and planned to migrate all instance from AL2012 to AL2 before March 2022
          
          `,
          "behave" : `
          To migrate the instance from AL2012 to AL2, Vignesh used service called quilt, which is internal tool used in Amazon to migrate the Operating System from AL2012 to AL2, without loss of data or replacement host. Vignesh had created quilt pipeline and migrate the operating system from AL2012 to AL2
          `,
          "impact" : `
          Vignesh successfully migrated the 8  services which contains  15 beta host and 50 prod host without any loss of data and production down time.
          `

          }
        },
  "djsautomationforacems" : {
          "projectName" : "DJS job for MusicRoyaltiesAcems",
          "projectImage" : djsschedule,
          "projectdescription" : {
          "intro" : `
          The paper team receive daily severity-3 tickets from MusicRoyaltiesAcems engine to clear the customer data, for all three regions FE,EU, and NA each tickets for each region. The SLA of the ticket is 48 hrs.Due to this we need to spend 30 mins in each ticket and run the djs job to clear data for both Adult and Child customer manually. Total we need to 90 mins to resolve this daily task.
          `,
          "behave" : `
          Vignesh observed the ticket pattern and identified that ticket was created for non-deleted customer data at 4:30am (IST) on every day, so Vignesh created DJS jobs for Child and Adult customer separately for each region, total 6 DJS job and scheduled it for 4:00am which clear the Adult and Child customers data and before creation of ticket.
          `,
          "impact" : `
          From December 2021 to August 2022 we had received 259 tickets, after establishing the DJS job from mid of Aug, we didn’t get any tickets from ACEMS, which save 60 mins of human effort every day.
          `

          },
        },

        "s3costoptimisationproject" : {
          "projectName" : "S3 cost Optimisation",
          "projectImage" : s3costoptimisation,
          "projectdescription" : {
          "intro" : `
          In paper org we’re storing lot of customer and organisational data in our S3 bucket, which  makes more cost in S3 bucket resource, to save unwanted expense, amazon conducted S3 bucket campaign which located the high storage S3 bucket without lifecycle policy and cut tickets to respective team.
          `,
          "behave" : `
          For paper org we received ticket for both Royalties and Reporting AWS account, Vignesh reviewed the bucket and created a consolidated quip which contains the S3 data details and the respective S3 path and reached to both Reporting and Royalties Dev as well as SDM to get dataset requirement and we finally decided to set life cycle policy for 5 years to production bucket and 30 days for beta buckets 
          `,
          "impact" : `
          As a result of lifecycle policies, on the prod account we able to see the impact in S3 cost from 2023 as all the datas in prod account is stored in 2018 October and since create life cycle policy for 30 days, all the data in the beta bucket will get delete after 30 days
          `

          }
        },
          "projectsandwihch" : {
          "projectName" : "Project Sandwich",
          "projectImage" : projectsandtwitch,
          "projectdescription" : {
          "intro" : `
          This project target to migrate our c/m/i 1, 2, 3 or 4 series capacity in IAD/PDX to power efficient current generation (6g/5/6i) instance types. The preferred migrations strategy is to Icelake(c6i, m61, r61) for C & M family migrations and to utilize i3en / i4i for Vignesh platform migrations.
          `,
          "behave" : `
          Before migrating host, we had couple of action item, Vignesh had ordered required host in required region through fleet console and created stepping plan which contains data with required host number for each service and region as per host configuration.Then Vignesh had created ASG for all apollo environment and created MCM  with our action item which reviewed and  approved by respective on-call SDE to migrate our host.Once we got an approval, will onboard the new host to our ASG and remove the old host without any downtime in our service.
          `,
          "impact" : `
          As the result of migration, we saved expenditure due to low power consumption and achieved his process efficiency for 89 host and which running 69 apollo environment stages.
          `

          }
        },
        "patchmanagershephered" : {
          "projectName" : "Patch Manager for Shepherd risk",
          "projectImage" : patchmamager,
          "projectdescription" : {
          "intro" : `
          Paper team receiving tickets from shepherd team  to update the EC2 instance operating system, which running with risk softwares to recommended version, this risk software had direct impact on our security vulnerability. To resolve the shepherd risks  we need to login into the host and update the software through terminal with bash command.

          Doing this manually will make us to spend 30 minutes on each host, to run all command to host manually.
          
          `,
          "behave" : `
          Since we had receiving lot of instance under the same risk, Vignesh explored AWS and find optimal solution to fix the issue which is called patch manager, using this patch manager we can execute the command upto 50 host at same time, we can select the instance manually or we can provide the tag to the patch manager which execute the given command to all instance associated with the tag.
          `,
          "impact" : `
          Due to this we had patched 259 instance as of now and resolved  few shepherd tickets associated with EC2 instance pathing risk, we patch instance within 10 minutes for 50 instance, which save 5+ hours time and human effort on this type of tickets, also we can save log details in S3 bucket through patch manager if require so any one can validate the job which done through patch manager.
          `

          }
        },

        "grccomplianceaudit" : {
          "projectName" : "GRC compliance audit",
          "projectImage" : complianceaudit,
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
        },
 
        "addresssasrisk" : {
          "projectName" : "Addressed SAS Risk",
          "projectImage" : sasrisk,
          "projectdescription" : {
          "intro" : `
          Paper org had 300+ risk in the dashboard in the month of Jan 2022, all risks are created SAS since paper arg system had consuming outdated and depreciated software
          `,
          "behave" : `
          To resolve the SAS we collected system job details and consolidated the data in quip which help us to validate the job once we make the code changes.For code reviews Vignesh had contacted respective team on-call and got approval from them, for apollo related risks (Eg:sync from parent, adding or removing consumable environment) Vignesh got approval through MCM and resolve the risk, also verified job status.
          `,
          "impact" : `
          As a result Vignesh had addressed 2183 SAS tickets and make our system as compliant 
          `

          }
        },
        "grccompliancemanager" : {
          "projectName" : "GRC compliance Manager",
          "projectImage" : grcweb,
          "projectdescription" : {
          "intro" : `
          Our team receives compliance ticket from GRC team whenever the changes made in AWS resource through console, the purpose of the ticket is to capture the changes user details and justification for changes made through console, for each and every violation we need to reach out to the user and get justification for the changes.
          `,
          "behave" : `
          To resolve the issue, Vignesh planned to create an web application, and provide access to web application to all aws account owned by paper, so whenever the users need to make changes in AWS account, they can made changes through  website.Before executing the changes, the web application will get all details like business justification and their manager alias and store the details in RDS for our auditing purpose.
          `,
          "impact" : `
          No tickets will be created from GRC, No need to reach_out to user for justification, audit process will be easy as we can export details for audit whenever we want, human effort 5+ hours will get save on every week.
          `

          }
        },
        "pipelinefailure" : {
          "projectName" : "Pipeline failure tickets sev2",
          "projectImage" : pipelinefailure,
          "projectdescription" : {
          "intro" : `
          RoyaltiesOps (SFO) receive the sev 2 tickets from royalties, when the jobs  are failed in OmniDashBoard to notify us, the system cuts auto-cut ticket to notify us. Royalties dataset is source for all jobs reporting and publishing jobs. The SLA for the ticket is 24 hours.
          `,
          "behave" : `
          To resolve the ticket, Vignesh had locate the root-cause for the failure, by reading logs and re-run the failed job, till job get succeed will monitor the job and resolve the ticket once the job completed successfully. 
          `,
          "impact" : `
          Vignesh had resolved 107 sev2 tickets immediately, which able to prevent delay in delivering the daily reports to vendor 
          `

          }
        },
"ospatchingproject" : {
          "projectName" : "Patch Manager",
          "projectImage" : patchmamager,
          "projectdescription" : {
          "intro" : `
          we received lot of shepherd risk for the EC2 instance, for large number of instance we use patch manager but if there no unique tag across the instance, we need to add the instance each and every one manually after locating the instance id using the IP address. This makes the current process more complicated and we need spend time to add each and every instance manually.Also if any one or two instance had different tags, there is chance we might miss the instance and risk will remain open till all instance get patched
          `,
          "behave" : `
          I had created two python scripts, which we can run from our local system one script help us to identify the instance id using  ip address and stored the instance id in the csv file, and other script help us to run the patch manager for bulk of instance bases on instance id
          `,
          "impact" : `
          Since the command running in the instance on basis of instance id along with saving time  through scripts, this won’t miss instance and risk closed  within next 48 hours which help us to close the ticket before SLA
          `

          }
        },
  
         "customerticket" : {
          "projectName" : "Customer Tickets",
          "projectImage" : customerticketimage,
          "projectdescription" : {
          "intro" : `
          we often receive payment related queries from vendors through Optimus - Nightingale Music Queue, this tickets are high priority  ticket as this tickets had direct impact on customer. From July 2022 we had received high number of customer tickets with missing report and payment discrepancy
          `,
          "behave" : `
          To resolve the ticket, Vignesh had go-through KT videos and get in touch with the SFO to get S3 dataset details, which required to locate the root-cause of vendor issue, once Vignesh located the vendor issue provided the solution to vendor and resolve the tickets.
          `,
          "impact" : `
          As a result, Vignesh had resolved 25 customer tickets and worked on 4 customer tickets, which help the resolvers to drive the investigation
          `

          }
        },
        "musicroyaltiesacems" : {
          "projectName" : "MusicRoyalties ACEMS engine tickets",
          "projectImage" : acemsengine,
          "projectdescription" : {
          "intro" : `
          The paper team receive daily severity-3 tickets from MusicRoyaltiesAcems engine to clear the customer data, for all three regions FE,EU, and NA each tickets for each region. The SLA of the ticket is 48 hrs
          `,
          "behave" : `
          To resolve the ticket , Vignesh  downloaded the SLA request in ACEMS portal and classify the ADULT and CHILD customers data as per date of request we received. After classified customer request as per date Vignesh ran the DJS job for both CHILD and ADULT customer separately as per date to clear the customer data. The system will check out-standing request for every 4 hours once all the customer datas are cleared in the system the ticket will resolve the ticket automatically.I repeat the same process for all three regions FE, NA, and EU which will take 30 minutes for each region.
          
          `,
          "impact" : `
          As a result all customer datas will cleared from system before SLA which is 48 hours and resolved 172 tickets
          `

          }
        },
        "grctickethandling" : {
          "projectName" : "GRC compliance Ticket handling",
          "projectImage" : grcticketaudit,
          "projectdescription" : {
          "intro" : `
          We received compliance ticket from GRC team, whenever the changes made in AWS account through console owned by paper team, GRC team creating team to capture the justification and record user details who made changes through the console.

          We mostly receive tickets for violations S3 bucket, LambdaFunctions, RDS onboard, EC2 violation , DynamoDB violation.
          
          `,
          "behave" : `
          To resolve the TT, Vignesh locate the user details using the cloudTrial tool and get justification from the user through e-mail. Once Vignesh got justification from the user update the details on the TT and resolve the ticket.
          `,
          "impact" : `
          Due to this we able to keep all the AWS resource as compliant and  track all the details of the user as well as justification for the changes, and resolved 140 tickets
          `

          }
        },
        "codereviews" : {
          "projectName" : "Code Reviews ",
          "projectImage" : codereview,
          "projectdescription" : {
          "intro" : `
          PaperOps (Chennai Team) is responsible for various tasks like SAS risk, shepherd and handling of customer tickets, to complete the task sometime we need to make code changes.
          Also Vignesh had pulled CR’s for grease monkey script, which reduce the work load and improve our current process (Eg: updating time in TT through sprint board without switching the website)
          Our team also contributing to add missing vendor codes in the PaperView tool 
          
          `,
          "behave" : `
          To resolve the SAS risk, Vignesh had made code changes and upgraded the dependency from existing version to recommended version to resolve the SAS risk.
          Also Vignesh had made code changes to add vendor code in paper view tool, and reach-out to PAD team on-call  for CR review and add the vendor code in the Paper view tool
          Creating code reviews for grease monkey script to merge the scripts in the package AmazonMusicSupportBrowserScripts
          `,
          "impact" : `
          As a result, we had fixed SAS risk without breaking system by getting review from the respective team on-call, as well as added vendor codes in the paper view tool.

          All of total Vignesh had posted total 53 Code reviews and made code changes
          
          `

          }
        },
        "auditinggrchandles" : {
          "projectName" : "Auditing L3 Dart",
          "projectImage" : auditingl3,
          "projectdescription" : {
          "intro" : `
          we heard lot of feedbacks from CS-Dart agents and Team Manager, stating that invalid concessions are going through DART from sites of PNQ and DEL. We will issue extra concession as token of apology whenever the customer experience impacted by amazon.

          Issuing invalid customer for positive response and ccx point will project that their shopping experience ruined by amazon, also this downgrade the business profit in considerable amount (2 million dollars approximately)
          
          `,
          "behave" : `
          To fix the issue in CJB10, we audited the DART contact from PNQ10 and DEL18, and found that all the contacts had invalid concession as well as the contacts are closed without sending HMD (How is My Drive)
          `,
          "impact" : `
          After the audit, we had send the consolidate the report and send to PNQ10 and DEL18 OPS manager and ask them to take appropriate action against the DART agents, in this project Vignesh had audited 300+ contacts in one week 
          `
        }
        },
        "providingkttose1" : {
          "projectName" : "Providing KT to SE - 1",
          "projectImage" : training,
          "projectdescription" : {
          "intro" : `
          As a part of hiring process we had hired a fresher vivekq, who is new to amazon technology, initially face some issues in handling task
          `,
          "behave" : `
          To make this situation better, Vignesh planned KT for vivekq and provided shadowing session in all the tasks which Vignesh had handled earlier. But when it comes to SAS risk it is not same process for all the risk we need to apply correct solution after gathering recommendation from the SAS team, so Vignesh had provided KT to vivek regarding working on brazil-build system and MAWS environment.

          Along with dedicated KT and reverse shadow process, Vignesh setup one on one meeting with and help me to resolve his task
          
          `,
          "impact" : `
          As a result vivekq started to resolve SAS, GRC, DeltaMonitoring and shepherded risk on his own, which increase team ticket resolve count.
          `

          }
        },
        }
    ]
        // "" : {
        //   "projectName" : "",
        //   "projectImage" : '',
        //   "projectdescription" : {
        //   "intro" : `

        //   `,
        //   "behave" : `
         
        //   `,
        //   "impact" : `
         
        //   `

        //   }
        // }
  


    //     "" : {
    //       "projectName" : "",
    //       "projectImage" : '',
    //       "projectdescription" : {
    //       "intro" : `

    //       `,
    //       "behave" : `
         
    //       `,
    //       "impact" : `
         
    //       `

    //       }
    //     }
 
       
   

    return allprojects;
}