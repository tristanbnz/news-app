News App created for MSA 2020
Tristan Brynildsen
University of Waikato

http://msa-2020-devops-tristanbuk.azurewebsites.net

----
DevOps pipeline:
The build pipeline created in DevOps checks for push changes to the master and develop branches of my GitHub repo, and then triggers the build pipleline.
It then injects the Node.js dependency.
It then runs the Node.js build tasks, and puts the build into an archive file, ready for the release pipeline to deploy.