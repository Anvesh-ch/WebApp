import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import DesignTokenColors from '../../Style/DesignTokenColors';
import ModalDisplayTemplateA from '../../../../components/Widgets/ModalDisplayTemplateA';
import standardBoxShadow from '../../Style/standardBoxShadow';
import PasskeyVerifiedModal from './PasskeyVerifiedModal';
import AppObservableStore from '../../../stores/AppObservableStore';

const VerifyWithEmailModal = ({ politicianName }) => {
  const [emailOption, setEmailOption] = useState(null);
  const [passkey, setPasskey] = useState('');
  const [passkeyVerified, setPasskeyVerified] = useState(false); // switch to toggle PasskeyVerifiedModal
  const publicEmails = [`info@${politicianName.toLowerCase().replaceAll( /[. ]/g, '')}.com`, 'john.dough@lacounty.gov'];

  const handleCloseVerifyWithEmailModal = () => {
    AppObservableStore.setShowClaimProfileWithEmailModal(false);
  };

  const handleEmailOptionClick = (value) => {
    setEmailOption((prev) => (prev === value ? null : value));
  };

  const handlePasskeyChange = (e) => {
    setPasskey(e.target.value);
  };

  const handleOpenVerifyOtherWaysModal = () => {
    AppObservableStore.setShowClaimProfileWithEmailModal(false);
    AppObservableStore.setShowClaimProfileWithOtherWaysModal(true);
  };

  const dialogTitleJsx = (
    <VerifyWithEmailModalHeader>
      To edit this profile, verify as a candidate
    </VerifyWithEmailModalHeader>
  );

  const textFieldJsx = (
    <VerifyWithEmailModalContainer>
      {publicEmails.length > 0 && (
        <>
          <VerifyWithEmailModalSubtitle>
            We found publicly available emails associated with
            {' '}
            {politicianName}
            .
          </VerifyWithEmailModalSubtitle>
          <VerifyWithEmailModalSubtitle>
            Select the one you have access, enter your passkey or
            {' '}
            <OtherWaysVerifyButtonAnchor
              onClick={handleOpenVerifyOtherWaysModal}
            >
              see other ways to verify
            </OtherWaysVerifyButtonAnchor>
            .
          </VerifyWithEmailModalSubtitle>
          <VerifyWithEmailSubheader>
            Verify with email
          </VerifyWithEmailSubheader>
          {publicEmails.map((email) => (
            <EmailSelection
              htmlFor={`public-email-option-${email}`}
              key={email}
              onClick={() => handleEmailOptionClick(email)}
            >
              <EmailRadioInput
                id={`public-email-option-${email}`}
                type="radio"
                checked={emailOption === email}
                value={email}
              />
              {email}
            </EmailSelection>
          ))}
          <VerificationButton
            disabled={emailOption === null}
          >
            Send verification code
          </VerificationButton>
          <SectionDivider />
        </>
      )}
      <VerifyWithEmailSubheader>
        Verify with passkey received through candidate contact form or social media
      </VerifyWithEmailSubheader>
      <PasskeyVerificationInput
        type="text"
        placeholder="Passkey"
        value={passkey}
        onChange={handlePasskeyChange}
      />
      <SectionDivider />
      <OtherWaysVerifyButtonFull
        onClick={handleOpenVerifyOtherWaysModal}
      >
        See other ways to verify
      </OtherWaysVerifyButtonFull>
      <PasskeyVerifiedModal
        passkeyVerified={passkeyVerified}
        setPasskeyVerified={setPasskeyVerified}
        politicianName={politicianName}
      />
    </VerifyWithEmailModalContainer>
  );

  return (
    <ModalDisplayTemplateA
      dialogTitleJSX={dialogTitleJsx}
      toggleModal={handleCloseVerifyWithEmailModal}
      show={AppObservableStore.getShowClaimProfileWithEmailModal()}
      textFieldJSX={textFieldJsx}
      tallMode
    />
  );
};

VerifyWithEmailModal.propTypes = {
  politicianName: PropTypes.string,
};

const VerifyWithEmailModalHeader = styled('h1')`
  font-size: 18px;
  margin: 0;
  padding: 0;
`;

const VerifyWithEmailModalContainer = styled('div')`
  margin: 8px 0 24px 0;
`;

const VerifyWithEmailModalSubtitle = styled('p')`
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

const OtherWaysVerifyButtonAnchor = styled('button')`
  background: transparent;
  border: none;
  color: ${DesignTokenColors.primary600};
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

const VerifyWithEmailSubheader = styled('h2')`
  font-size: 14px;
  font-weight: 700;
  margin-top: 18px;
`;

const EmailSelection = styled('label')`
  align-items: center;
  border: 1px solid ${DesignTokenColors.neutralUI100};
  border-radius: 8px;
  box-shadow: ${standardBoxShadow()};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 60px;
  margin: 4px 0 8px 0;
  padding: 0 16px;

  &:hover {
    background-color: ${DesignTokenColors.neutral50};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Shadow effect on hover */
  }
`;

const EmailRadioInput = styled('input')`
  margin-right: 6px;
`;

const VerificationButton = styled('button')`
  border: none;
  border-radius: 20px;
  color: white;
  background-color: ${DesignTokenColors.primary600};
  font-size: 12px;
  height: 40px;
  margin: 8px 0 2px 0;
  width: 100%;

  &:disabled {
    color: ${DesignTokenColors.neutralUI600};
    background-color: ${DesignTokenColors.neutralUI100};
  }
`;

const SectionDivider = styled('hr')`
  border-top: 1px solid ${DesignTokenColors.neutralUI100};
  width: 100%;
`;

const PasskeyVerificationInput = styled('input')`
  border: 1px solid ${DesignTokenColors.neutralUI100};
  border-radius: 4px;
  font-size: 14px;
  height: 40px;
  margin: 8px 0 2px 0;
  padding: 0 8px;
  width: 100%;
`;

const OtherWaysVerifyButtonFull = styled(OtherWaysVerifyButtonAnchor)`
  font-weight: 700;
  width: 100%;
`;

export default VerifyWithEmailModal;
