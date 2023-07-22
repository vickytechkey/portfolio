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
        "al2migration" : {
          "projectName" : "AL2 Migration",
          "projectImage" : al2migration,
          "projectdescription" : {
          "intro" : `
          In 2021, a host owned by Paper was running with the Amazon Linux 2012 OS. Running an outdated OS leads to security issues. To fix the issue, an Amazon-wide AL2 migration campaign was planned in 2021, with the plan to migrate all instances from AL2012 to AL2 before March 2022.
          
          `,
          "behave" : `
          To migrate the instance from AL2012 or RedHatLinux to AL2, Amazon uses a version set, which stores all dependencies required to run the service. I went ahead and upgraded the dependencies and migrated the operating system from AL2012 or RedHat Linux to AL2. To migrate the host operating system, I used a service called Quilt, which is an internal Amazon tool used to migrate the Operating System from RedHatLinux or AL2012 to AL2 without loss of data or replacing the host. I had created the quilt pipeline and migrated the operating system from AL2012 to AL2.
          `,
          "impact" : `
          I successfully migrated the 21 services, which contain 1015 hosts, without any loss of data or production downtime.
          `

          }
        },
  "djsautomationforacems" : {
          "projectName" : "DJS job for MusicRoyaltiesAcems",
          "projectImage" : djsschedule,
          "projectdescription" : {
          "intro" : `
          Our paper team receives daily severity-3 tickets from the MusicRoyaltiesAcems engine to clear the customer data for all three regions: FE,EU, and NA. The SLA for the ticket is 48 hours. Due to this, we need to spend 30 minutes on each ticket (3 tickets per day) and run the DJS job to clear data for both Adult and Child customers manually. In total, we need 90 minutes to resolve this daily task.
          `,
          "behave" : `
          I observed the ticket pattern and identified that tickets were created for non-deleted customer data at 4:30 a.m. (IST) every day, so I created DJS jobs for Child and Adult customers separately for each region, totaling 6 DJS jobs, and scheduled them for 4:00 a.m., which cleared the Adult and Child customers data before the creation of the ticket.
          `,
          "impact" : `
          In the last two years, we have received 2190 tickets. After establishing the DJS job, we didn’t get any tickets from ACEMS, which saves 90 minutes of human effort every day.
          `

          },
        },

        "s3costoptimisationproject" : {
          "projectName" : "S3 cost Optimisation",
          "projectImage" : s3costoptimisation,
          "projectdescription" : {
          "intro" : `
          In our paper organization, we’re storing a lot of customer and organizational data in our S3 bucket, which makes the S3 bucket resource more expensive. To save on unnecessary expenses, I conducted a S3 bucket campaign that located the high-storage S3 bucket without a lifecycle policy and cut tickets to the respective team.
          `,
          "behave" : `
          Along with cutting tickets to other music teams, I reviewed the bucket in our PAPER team and created a consolidated quip that contains the S3 data details and the respective S3 path. I reached out to SDM to get the dataset requirements to decide the data retention policy, and we finally decided to set a life cycle policy for 5 years for the production bucket and 30 days for beta buckets.
          `,
          "impact" : `
          This deletes unused data automatically. based on access patterns and deleted unused data, which saved 10+ million in billing in our S3 and reduced cost by 58% of the total bill.
          `

          }
        },
          "projectsandwihch" : {
          "projectName" : "Project Sandwich",
          "projectImage" : projectsandtwitch,
          "projectdescription" : {
          "intro" : `
          This project aims to migrate our c/m/i 1, 2, 3, or 4 series capacity in IAD/PDX to power-efficient current generation (6g/5/6i) instance types. The preferred migration strategy is to use Icelake (c6i, m61, and r61) for C and M family migrations and to utilize i3en and i4i for music platform migrations.
          `,
          "behave" : `
          Before migrating hosts, we had a couple of action items. I had ordered the required host in the required region through the fleet console and created a stepping plan, which contains data with the required host number for each service and region as per host configuration. Then I created ASG for all Apollo environments and created MCM with our action item, which was reviewed and approved by the respective SDM to migrate our host. Once we get approval, we will onboard the new host to our ASG and remove the old host without any downtime in our service.
          `,
          "impact" : `
          I had changed host configuration for 1024 hosts and also made code changes to 76 packages and 1000+ lines to prepare the service for migration without any interruption.
          `

          }
        },
        "patchmanagershephered" : {
          "projectName" : "Patch Manager for Shepherd risk",
          "projectImage" : patchmamager,
          "projectdescription" : {
          "intro" : `
      Our paper team received tickets from the shepherd team to update the EC2 instance operating system, which was running with risk software. This risky software had a direct impact on our security vulnerabilities. To resolve the shepherd risks, we need to login to the host and update the software through the terminal with the bash command. Doing this manually will require us to spend 30–60 minutes on each host to run all commands on that host manually.
          
          `,
          "behave" : `
          Since we had received a lot of instances under the same risk, I explored AWS and found the optimal solution to fix the issue, which is called the patch manager. Using this patch manager, we can execute the command on up to 50 hosts at the same time. but still we are only able to patch 50 instances at a time. To expand the opportunity, I create the service with SageMake, which patches the instance daily and reboots the instance if the reboot is required.
          `,
          "impact" : `
          After implementing my project, we have patched 1024 instances as of now and resolved 500+ shepherd tickets associated with EC2 instance pathing risk. We patch instances within 10 minutes for 1024 instances, which saves 119+ hours of time and human effort on this type of ticket. The patch log details are saved in our S3 bucket through patch manager, so anyone can validate the job that was done through patch manager.
          `

          }
        },

        "grccomplianceaudit" : {
          "projectName" : "GRC compliance audit",
          "projectImage" : complianceaudit,
          "projectdescription" : {
          "intro" : `
          We received tickets from the GRC team whenever changes happened to AWS resources through the console. This ticket helps the GRC team audit and capture justification for the changes made through the console. The pain point in this ticket is that the GRC portal won’t give details of the user who made the changes; we need to locate the user manually. To get the user data, we reached out to GRC on-call initially and got user data from them through email or Slack, which will take 1-3 business days to get a response from on-call. Then, we needed to reach out to the user who made the changes and will resolve the ticket once we get justification from the user.
          `,
          "behave" : `
          I explored AWS and found a solution to locate the user details for S3 violations using event source and dynamoDB violations using resource name.
          `,
          "impact" : `
          By implementing this solution, there is no need to contact GRC on-call for user data. Also, since we’re locating user data ourselves and we can resolve the GRC ticket before SLA.
          `

          }
        },
 
        "addresssasrisk" : {
          "projectName" : "Addressed SAS Risk",
          "projectImage" : sasrisk,
          "projectdescription" : {
          "intro" : `
          Paper org had 500+ risks in the dashboard in the month of January 2019, all of which were created in SAS since the paper arg system was consuming outdated and depreciated software.
          `,
          "behave" : `
                    To resolve the SAS I collected system job details and consolidated the data in quip, which helps us validate the job once we make the code changes. To address the risk, I upgraded the software to the recommended version, posted 1156 code changes that address 489 risks in the last 4 years, and modified test cases for 56 services.
          `,
          "impact" : `
          As a result I had addressed 2183 SAS tickets and make our system as compliant 
          `

          }
        },
        "grccompliancemanager" : {
          "projectName" : "GRC compliance Manager",
          "projectImage" : grcweb,
          "projectdescription" : {
          "intro" : `
          Our team receives compliance tickets from the GRC team whenever changes are made to AWS resources through the console. The purpose of the ticket is to capture the user details and justification for the changes made through the console. For each and every violation, we need to reach out to the user and get justification for the changes.
          `,
          "behave" : `
          To resolve the issue, I created a web application and provided access to the web application to all AWS accounts owned by Paper, so whenever the users needed to make changes to their AWS accounts, they could do so through the website. Before executing the changes, the web application will get all the details, like the business justification, and store the details in RDS for our auditing purposes.
          `,
          "impact" : `
          After implementing this project, we didn't get any tickets from GRC, which resulted in saving 600 hours of working effort per year. Also, we are able to download audits on the basis of S3 bucket resource names; this saves 30 hours per quarter.
          `

          }
        },
        "pipelinefailure" : {
          "projectName" : "Pipeline failure tickets sev2",
          "projectImage" : pipelinefailure,
          "projectdescription" : {
          "intro" : `
          RoyaltiesOps (SFO) receives the sev 2 tickets from royalties. When the jobs fail in OmniDashBoard to notify us, the system cuts an auto-cut ticket to notify us. The royalties dataset is the source for all jobs reporting and publishing jobs. The SLA for the ticket is 24 hours.
          `,
          "behave" : `
          To resolve the ticket, I had to locate the root cause and fix the root cause by removing dead vendors from active vendors.
          `,
          "impact" : `
          I had resolved 107 sev2 tickets immediately, which able to prevent delay in delivering the daily reports to vendor.Also by fixing the root cause I prevented 1095 tickets per year.
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
          To resolve the ticket, I complete my analysis and get in touch with the SFO (San Fansico ) to get S3 dataset details, which required to locate the root-cause of vendor issue, once I located the vendor issue provided the solution to vendor and resolve the tickets.
          `,
          "impact" : `
          As a result, I had resolved 256 customer tickets which included re-generating reports, customizing reports as per requirement, and fixing vendor FTP issue.
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
          As a result all customer datas will cleared from system before SLA which is 48 hours and resolved 2560+ tickets
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
          To resolve the TT, I locate the user details using the cloudTrial tool and get justification from the user through e-mail. Once Vignesh got justification from the user update the details on the TT and resolve the ticket.
          `,
          "impact" : `
          Due to this we able to keep all the AWS resource as compliant and  track all the details of the user as well as justification for the changes, and resolved 1450+ tickets
          `

          }
        },
        "codereviews" : {
          "projectName" : "Code Reviews ",
          "projectImage" : codereview,
          "projectdescription" : {
          "intro" : `
          PaperOps (Chennai Team) is responsible for various tasks like SAS risk, shepherd and handling of customer tickets, to complete the task sometime we need to make code changes.
          Also Vignesh had pulled CR’s (code reviews) for grease monkey script, which reduce the work load and improve our current process (Eg: updating time in TT through sprint board without switching the website)
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
        "providingkttose1" : {
          "projectName" : "Providing KT to SE - 1",
          "projectImage" : training,
          "projectdescription" : {
          "intro" : `
          As a part of the hiring process, we hired 25 engineers who are new to Amazon technology and initially faced some issues handling tasks.          `,
          "behave" : `
          To make this situation better, I planned KT for Vivekq and provided shadowing sessions for all the tasks that I had handled earlier, as well as for Amazon technologies like pipelines and build tools. But when it comes to SAS risks, it is not the same process for all the risks; we need to apply the correct solution after gathering recommendations from the SAS team, so I provided KT sessions to engineers regarding working on the Brazil-build system and MAWS environment.


          Along with dedicated KT and reverse shadow processes, I set up a one-on-one meeting with him, and he helped me resolve his task.
          
          `,
          "impact" : `
          As a result all engineers started to resolve SAS, GRC, DeltaMonitoring and shepherded risk on his own, which increase team ticket resolve count by 91% when compare to previous year data.
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