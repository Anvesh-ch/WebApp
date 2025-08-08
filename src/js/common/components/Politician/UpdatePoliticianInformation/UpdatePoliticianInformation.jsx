import PropTypes from 'prop-types';
import React, { useState, Suspense } from 'react';
import styled from 'styled-components';
import { Close, EditOutlined } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled as muiStyled } from '@mui/material/styles';
import DesignTokenColors from '../../Style/DesignTokenColors';
import VerifyOtherWaysModal from './VerifyOtherWaysModal';
import VerifyWithEmailModal from './VerifyWithEmailModal';


const OpenExternalWebSite = React.lazy(() => import(/* webpackChunkName: 'OpenExternalWebSite' */ '../../Widgets/OpenExternalWebSite'));

const updateCandidateInformationLink = 'https://docs.google.com/forms/d/e/1FAIpQLSePdeW32PClaSO1pUWBJnQ75wFGPOtviNaqOABBYps7NIH3hA/viewform?usp=sf_link';
const CustomTooltip = muiStyled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#001F3F',
    color: '#fff',
    fontSize: '13px',
    padding: '10px 10px 16px 16px',
    position: 'relative',
    width: '180px',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#001F3F',
  },
}));

const UpdatePoliticianInformation =  (props) => {
  const [showVerifyWithEmailModal, setShowVerifyWithEmailModal] = useState(false);
  const [showVerifyOtherWaysModal, setShowVerifyOtherWaysModal] = useState(false);
  const { politicianName } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const newDesign2025 = true;
  const voterCanEditCandidate = true; // This should be determined by the actual application logic
  const voterCanEditCandidateHighlight = false;

  const handleOpenVerifyWithEmailModal = () => {
    setShowVerifyWithEmailModal(true);
  };

  return (
    <UpdateInformationWrapper>
      {!!(politicianName) && (
        <>
          {newDesign2025 && (
            <>
              {voterCanEditCandidate ? (
                <>
                  <CustomTooltip
                    interactive
                    arrow
                    placement="right"
                    open={tooltipOpen}
                    onOpen={() => setTooltipOpen(true)}
                    onClose={() => setTooltipOpen(false)}
                    title={(
                      <TooltipContent>
                        <CloseButton size="small" onClick={() => setTooltipOpen(false)}>
                          <Close fontSize="small" />
                        </CloseButton>
                        Edit your candidate’s profile here
                        <GotItButton onClick={() => setTooltipOpen(false)}>
                          GOT IT
                        </GotItButton>
                      </TooltipContent>
                    )}
                  >
                    <EditProfileWrapper
                      onMouseEnter={() => setTooltipOpen(true)}
                      highlight={voterCanEditCandidateHighlight}
                      onClick={handleOpenVerifyWithEmailModal}
                    >
                      <EditOutlined fontSize="small" style={{ marginRight: 4 }} />
                      Edit profile
                    </EditProfileWrapper>
                  </CustomTooltip>
                  <>
                    <VerifyOtherWaysModal
                      setShowVerifyOtherWaysModal={setShowVerifyOtherWaysModal}
                      showVerifyOtherWaysModal={showVerifyOtherWaysModal}
                      politicianName={politicianName}
                    />
                    <VerifyWithEmailModal
                      setShowVerifyWithEmailModal={setShowVerifyWithEmailModal}
                      showVerifyWithEmailModal={showVerifyWithEmailModal}
                      setShowVerifyOtherWaysModal={setShowVerifyOtherWaysModal}
                      politicianName={politicianName}
                    />
                  </>
                </>
              ) : (
                <Suspense fallback={<></>}>
                  <FlexLayoutDiv>
                    <CandidateStaffText>
                      For candidate staff:&nbsp;
                    </CandidateStaffText>
                    <AddInfoLink>
                      <OpenExternalWebSite
                        linkIdAttribute="updateCandidateInformation"
                        url={updateCandidateInformationLink}
                        target="_blank"
                        className="u-link-color"
                        body={(
                          <div>
                            Add info
                          </div>
                        )}
                        destinationPageName="PoliticianEditForm"
                        destinationPageType="politician"
                        trackingOn
                      />
                    </AddInfoLink>
                  </FlexLayoutDiv>
                </Suspense>
              )}
            </>
          )}
        </>
      )}
    </UpdateInformationWrapper>
  );
};

UpdatePoliticianInformation.propTypes = {
  politicianName: PropTypes.string,
};

const AddInfoLink = styled('div')`
  font-size: 12px;
`;

const CandidateStaffText = styled('div')`
  color:${DesignTokenColors.neutralUI100};
  font-size: 10px;
`;

const EditProfileWrapper = styled('div')`
  color: ${DesignTokenColors.primary500};
  cursor: pointer;
  font-size: 12px;
`;

const FlexLayoutDiv = styled('div')`
  display: flex;
  align-items: flex-end;
`;

const UpdateInformationWrapper = styled('div')`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const TooltipContent = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const GotItButton = styled(Button)`
  align-self: flex-end;
  color: #fff;
  font-size: 12px;
  text-transform: none;
  min-width: 0;
  white-space: nowrap;
`;

const CloseButton = muiStyled(IconButton)`
   align-self: flex-end;
   color: #fff;
   min-width: 0;
   padding: 0;
   z-index: 1;
 `;

export default UpdatePoliticianInformation;
