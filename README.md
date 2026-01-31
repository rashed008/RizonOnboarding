


https://github.com/user-attachments/assets/4b3c48ee-d935-4c70-812a-2181482c7694






Install dependencies

**npm install**

Start the app:

**npx expo start**

**Testing Notes**
* For testing purposes, the Review Bottom Sheet is shown immediately after the user selects “Yes, loving it”.
* In a production scenario, the review prompt is designed to appear after 2–3 days, based on a backend-controlled eligibility timestamp.
* The production-ready logic for delayed display is already implemented and can be enabled by relying on the stored **reviewPromptEligibleAt** value instead of showing the sheet immediately.


**Notes**
* All backend interactions are mocked to simulate real API behavior.
* Review prompt timing is controlled via a future timestamp for production-ready logic.
* Existing UI components were reused as instructed.
