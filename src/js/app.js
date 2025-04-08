// Guide steps data
const GUIDE_STEPS = {
  'start': {
    title: 'Pearson POP Troubleshooting Guide',
    description: 'Select the issue you are experiencing:',
  },
  'credentials': {
    title: 'Invalid Credentials or Account Blocked',
    description: 'Follow these steps to resolve invalid credentials or account blocked issues:',
    content: (
      <div>
        <ol className="pl-5 list-decimal space-y-2">
          <li>Check the user can log in to <a href="#" className="link-button">https://btecng.pearson.com</a>. If they can't, reset the password.</li>
          <li>Check if the time on the centre's Exam Centre Service computer is correct and the same as on our computers. If the time is different, ask them to change it and try to log in again.</li>
          <li>Delete the EcDatabase.sdf file and restart the Exam Centre Service.</li>
          <li>Contact Onscreen Support if the issue persists.</li>
        </ol>
      </div>
    ),
    options: [
      { label: 'How to Reset Password', nextStep: 'reset-password' },
      { label: 'How to Delete EcDatabase', nextStep: 'delete-database' },
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'wrong-centre': {
    title: 'Wrong Centre',
    description: 'If you are experiencing issues with the wrong centre appearing:',
    content: (
      <div>
        <ol className="pl-5 list-decimal space-y-2">
          <li>The Exam Centre Service is set up for a different centre. Delete the EcDatabase.sdf file and restart the Exam Centre Service.</li>
          <li>Contact Onscreen Support if the issue persists.</li>
        </ol>
      </div>
    ),
    options: [
      { label: 'How to Delete EcDatabase', nextStep: 'delete-database' },
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'error': {
    title: 'An unexpected error occurred',
    description: 'If you see "An unexpected error occurred" message:',
    content: (
      <div>
        <ol className="pl-5 list-decimal space-y-2">
          <li>First, try to delete the EcDatabase.sdf file and restart the Exam Centre Service.</li>
          <li>If the centre still gets the error, contact Onscreen Support.</li>
        </ol>
        <div className="warning-box">
          <p className="text-bold">Note:</p>
          <p>This error is not usually caused by an issue with the user's password, so resetting the password will not resolve the issue.</p>
        </div>
      </div>
    ),
    options: [
      { label: 'How to Delete EcDatabase', nextStep: 'delete-database' },
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'orders': {
    title: 'Test orders not showing on the Administrator Dashboard',
    description: 'If test orders are not appearing on the Administrator Dashboard:',
    content: (
      <div>
        <ol className="pl-5 list-decimal space-y-2">
          <li>Ensure that the test order is not for Digital Functional Skills. Digital Functional Skills tests will only show on the 'FS Digital Bookings' section of the Pearson Assessor Dashboard (PAD) and will not be visible on the Administrator Dashboard.</li>
          <li>Check if the order is showing on BTECNG. If the order is not on BTECNG, this is not an error with the Administrator Dashboard. Contact Onscreen Support.</li>
          <li>Check whether the centre (including subsite if applicable) appears more than once on BTECNG. If so, contact Onscreen Support.</li>
          <li>Delete the EcDatabase.sdf file and restart the Exam Centre Service.</li>
          <li>Contact Onscreen Support if the issue persists.</li>
        </ol>
      </div>
    ),
    options: [
      { label: 'How to View BTECNG Orders', nextStep: 'view-orders' },
      { label: 'How to Delete EcDatabase', nextStep: 'delete-database' },
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'learners': {
    title: 'No learners are showing in the order to add to rooms',
    description: 'Sometimes when you go to prepare the assessment, you will not be able to see any learners to add to the rooms. This usually happens if you have selected "Prepare assessment" before "Activate assessment".',
    content: (
      <div>
        <ol className="pl-5 list-decimal space-y-2">
          <li>To make the learners appear, first close all open tabs on the Administrator Dashboard (e.g. Orders, Download Package, Order allocation, etc.) using the 'x' Close icons.</li>
          <li>Check the status of the package on the 'List orders' page.</li>
          <li>If the status is "Package downloaded", select "Activate Package" in Actions.</li>
          <li>Once the status shows as "Package activated", completely log out of the Administrator Dashboard then log back in. You can now click "Prepare assessment" and the learners will appear.</li>
        </ol>
      </div>
    ),
    options: [
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'queued-action': {
    title: 'Queued Action Failed/Invalid Download token',
    description: 'If you encounter "Queued Action Failed" or "Invalid Download token" errors:',
    content: (
      <div>
        <ol className="pl-5 list-decimal space-y-2">
          <li>Restart the Exam Centre Service (without deleting the EcDatabase).</li>
          <li>If that didn't work, then delete the EcDatabase.sdf file and restart the Exam Centre Service.</li>
          <li>Contact Onscreen Support if the issue persists.</li>
        </ol>
      </div>
    ),
    options: [
      { label: 'How to Restart Exam Centre Service', nextStep: 'restart-service' },
      { label: 'How to Delete EcDatabase', nextStep: 'delete-database' },
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'activate-assessment': {
    title: 'Unable to click Activate Assessment',
    description: 'If you are unable to click the "Activate Assessment" button:',
    content: (
      <div>
        <ol className="pl-5 list-decimal space-y-2">
          <li>Check all candidates on the 'Prepare Assessment' screen have been assigned to rooms, including absent candidates.</li>
          <li>Check that every room has an invigilator assigned, who is different for each room. If there are not enough invigilators for all the rooms or some are not active, they can be created or marked active on the 'List Invigilators' screen.</li>
          <li>Contact Onscreen Support if the issue persists.</li>
        </ol>
      </div>
    ),
    options: [
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'additional-candidates': {
    title: 'Additional candidates showing on Edexcel Online or BTECNG',
    description: 'If there are candidates showing on Edexcel Online or BTECNG that are not in your downloaded package:',
    content: (
      <div>
        <p className="text-medium mb-2">If the additional learner(s) are on the booking on Edexcel Online but not BTECNG, check the time of the booking:</p>
        <ol className="pl-5 list-decimal space-y-2">
          <li>If the time and date of the booking is in the past (even by a minute), contact Onscreen Support.</li>
          <li>If the time and date of the booking is in the future, the centre can go to Edexcel Online and remove the missing learner(s) from the current booking and then make a new booking that includes only the missing learner(s). This must be booked at a different time than the original booking.</li>
        </ol>
        
        <div className="info-box">
          <p>The centre will get a new test package to download within two hours. The new package will have a different order number but the centre can run it alongside the existing order number, assigned to the same invigilator once both orders are available.</p>
          <p className="mt-4">Even if the test has been booked two hours in the future, there is a window of four hours either side of the time that the test is booked for so the centre can set up and start the test as soon as it appears in the Administrator Dashboard if it migrates quicker, but this can still sometimes take the full two hours.</p>
        </div>
        
        <p className="text-medium mb-2 mt-4">If the additional learner(s) are on BTECNG, do the following:</p>
        <ol className="pl-5 list-decimal space-y-2">
          <li>If the package has not been downloaded and activated, the centre can refresh the dashboard and download the package again.</li>
          <li>If the package has already been activated, delete the EcDatabase.sdf file and restart the Exam Centre Service. <span className="text-bold">DO NOT DO THIS IF ANY LEARNERS ARE ALREADY TAKING THE TEST.</span> The centre can then re-download the package with all learners.</li>
        </ol>
      </div>
    ),
    options: [
      { label: 'How to Delete EcDatabase', nextStep: 'delete-database' },
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'print-logins': {
    title: 'No option to print learner logins',
    description: 'If you cannot find the option to print learner logins:',
    content: (
      <div>
        <ol className="pl-5 list-decimal space-y-2">
          <li>While preparing an assessment on the Administrator Dashboard there is an option to print learner logins. These are slips that can be printed and handed out to the learners, with their name, order number and learner number on.</li>
          <li>This option is only available on the Administrator Dashboard while preparing the test, and it disappears once the test set-up is complete.</li>
          <li>However, the option is still available on the Invigilator Dashboard, so the invigilator can print them once they log in there.</li>
        </ol>
      </div>
    ),
    options: [
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'procedures': {
    title: 'Common Procedures',
    description: 'Select a procedure for detailed instructions:',
    options: [
      { label: 'Reset BTECNG Password', nextStep: 'reset-password' },
      { label: 'Delete EcDatabase and restart Exam Centre Service', nextStep: 'delete-database' },
      { label: 'Restart Exam Centre Service', nextStep: 'restart-service' },
      { label: 'View orders on BTECNG', nextStep: 'view-orders' },
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'reset-password': {
    title: 'Reset BTECNG Password',
    description: 'Follow these steps to reset a BTECNG password:',
    content: (
      <div>
        <ol className="pl-5 list-decimal space-y-2">
          <li>Go to btecng.pearson and click on Menu {'->'} Centres.</li>
          <li>Search centre number.</li>
          <li>Go to Users and find the user.</li>
          <li>Click reset password.</li>
          <li>The user will receive an email from advance@ediplc.com (they may need to whitelist this address), and they need to log in to btecng.pearson.com using the username and temporary password in that email. Once they log in, they will need to change it to a permanent password. Then, use the new, permanent password to log in to the Administrator Dashboard.</li>
        </ol>
        <div className="warning-box">
          <p className="text-bold">Note about account lockouts:</p>
          <p>If the user has been locked out of the account from too many login attempts, they can't log in for 10 minutes. When they try to log in to BTECNG, it will say how many minutes are remaining before they can try again.</p>
        </div>
      </div>
    ),
    options: [
      { label: 'Back to Procedures', nextStep: 'procedures' },
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'delete-database': {
    title: 'Delete EcDatabase and restart Exam Centre Service',
    description: 'Follow these steps to delete the EcDatabase and restart the Exam Centre Service:',
    content: (
      <div>
        <ol className="pl-5 list-decimal space-y-2">
          <li>Go to the Exam Centre Service machine (this is the machine listed in the server list above username and password on the Administrator Dashboard login screen) {'->'} This PC and find C:\DataStore.</li>
          <li>Delete EcDatabase.sdf.</li>
          <li>Go to Services and right-click 'Exam Centre Service' and 'Restart'. The user will need Administrator rights to do this. If the Services option does not appear when searching the Windows Start menu, you can also open it by pressing the Windows key + R to open the 'Run' box, then type services.msc and hit Enter to open the Services App.</li>
          <li>Advise that when the user logs back into the Administrator Dashboard, they will need to make new Rooms and Invigilators.</li>
        </ol>
        <div className="danger-box">
          <p className="text-bold">Warning: DO NOT DO THIS IF ANY LEARNERS ARE ALREADY TAKING THE TEST.</p>
        </div>
      </div>
    ),
    options: [
      { label: 'Back to Previous Issue', nextStep: 'back' },
      { label: 'Back to Procedures', nextStep: 'procedures' },
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'restart-service': {
    title: 'Restart Exam Centre Service',
    description: 'Follow these steps to restart the Exam Centre Service:',
    content: (
      <div>
        <ol className="pl-5 list-decimal space-y-2">
          <li>On the Exam Centre Service machine (this is the machine listed in the server list above username and password on the Administrator Dashboard login screen), go to Services, right-click 'Exam Centre Service' and 'Restart'. The user will need Administrator rights to do this.</li>
          <li>If the Services option does not appear when searching the Windows Start menu, you can also open it by pressing the Windows key + R to open the 'Run' box, then type services.msc and hit Enter to open the Services App.</li>
        </ol>
      </div>
    ),
    options: [
      { label: 'Back to Previous Issue', nextStep: 'back' },
      { label: 'Back to Procedures', nextStep: 'procedures' },
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  },
  'view-orders': {
    title: 'View orders on BTECNG',
    description: 'Follow these steps to view orders on BTECNG:',
    content: (
      <div>
        <ol className="pl-5 list-decimal space-y-2">
          <li>Go to btecng.pearson.com {'->'} Menu {'->'} Orders status.</li>
          <li>Type the centre number without any letters in the Centre field (e.g. 12345 for centre 12345B).</li>
          <li>Click Filter.</li>
        </ol>
      </div>
    ),
    options: [
      { label: 'Back to Previous Issue', nextStep: 'back' },
      { label: 'Back to Procedures', nextStep: 'procedures' },
      { label: 'Back to Main Menu', nextStep: 'start' }
    ]
  }
};

function TroubleshootingGuide() {
  const [currentStep, setCurrentStep] = React.useState('start');
  const [history, setHistory] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleNavigateWithHistory = (nextStep) => {
    setHistory([...history, currentStep]);
    setCurrentStep(nextStep);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const previousStep = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentStep(previousStep);
    }
  };

  const getSeverityLevel = (step) => {
    const severityMap = {
      'credentials': 'critical',
      'error': 'high',
      'orders': 'medium',
      'learners': 'medium',
      'queued-action': 'high',
      'activate-assessment': 'high',
      'additional-candidates': 'medium',
      'print-logins': 'low',
    };
    return severityMap[step] || 'medium';
  };

  const filteredSteps = React.useMemo(() => {
    return Object.entries(GUIDE_STEPS).filter(([key, value]) => 
      key !== 'start' && 
      (value.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       value.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  const currentStepData = GUIDE_STEPS[currentStep];

  const renderStartContent = () => (
    <div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for an issue..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {searchQuery.length > 0 && (
        <div className="quick-links">
          {filteredSteps.length > 0 ? (
            filteredSteps.map(([key, value]) => (
              <div key={key} className="quick-link-card" onClick={() => handleNavigateWithHistory(key)}>
                <div className={`severity severity-${getSeverityLevel(key)}`}>
                  {getSeverityLevel(key).toUpperCase()}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No matching issues found. Try adjusting your search terms.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="container">
      <div className="header">
        <h1>{currentStepData.title}</h1>
      </div>
      
      {history.length > 0 && (
        <div className="breadcrumbs">
          <button onClick={() => setCurrentStep('start')}>Home</button>
          {history.map((step, index) => (
            <span key={index}>
              {' '}&gt;{' '}
              <button onClick={() => {
                setHistory(history.slice(0, index));
                setCurrentStep(step);
              }}>
                {GUIDE_STEPS[step].title}
              </button>
            </span>
          ))}
          {' '}&gt;{' '}
          <span>{currentStepData.title}</span>
        </div>
      )}

      <div className="content-card">
        {currentStep !== 'start' && (
          <div className={`severity severity-${getSeverityLevel(currentStep)}`}>
            Severity: {getSeverityLevel(currentStep).toUpperCase()}
          </div>
        )}
        <p>{currentStepData.description}</p>
        {currentStep === 'start' ? renderStartContent() : currentStepData.content}
        
        {currentStepData.options && (
          <div className="options">
            {currentStepData.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleNavigateWithHistory(option.nextStep)}
                className="option-button"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.render(
  <TroubleshootingGuide />,
  document.getElementById('root')
); 