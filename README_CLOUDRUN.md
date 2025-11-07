Aura-IDToken — Google Cloud Run deployment package

Steps (summary):
1. Create Google Cloud project and enable APIs:
   gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com

2. Create a Service Account and grant roles:
   - roles/run.admin
   - roles/iam.serviceAccountUser
   - roles/storage.admin
   - roles/cloudbuild.builds.editor

3. Create Workload Identity Pool and Provider for GitHub Actions OR create a service account key JSON and store as GitHub secret GCP_SA_KEY

4. Add GitHub repo secrets:
   - GCP_PROJECT_ID (your project id)
   - GCP_WI_PROVIDER (workload identity provider resource name) OR GCP_SA_EMAIL
   - GCP_SA_EMAIL (service account email)
   - NEXT_PUBLIC_TONCONNECT_PROJECT_ID (optional)

5. Push code to GitHub main. GitHub Actions will build and deploy to Cloud Run.

Notes:
- For local testing you can run: npm run dev (localhost:3000)
- Cloud Run provides HTTPS automatically.
