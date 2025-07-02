// lookupPageNameAndPageTypeDictForExternalUrls.js

// If there is a static path for a page, enter it here. If the path includes dynamic elements,
//  you'll need to generate the pageName and pageType dynamically in calculatePageNameAndPageTypeDict below.
// TODO Update to with hard-coded External URLs we use
import { isPoliticianSEOFriendlyURL } from '../common/utils/isSEOFriendlyURL';
import lookupPageNameAndPageTypeDict from './lookupPageNameAndPageTypeDict';

const pageNameAndTypeSimpleDictForExternalUrls = {
  'https://apps.apple.com/us/app/we-vote-voter-guide/id1347335726': {
    pageName: 'AppStoreiPhone',
    pageType: 'appStore',
  },
  'https://github.com/WeVote': {
    pageName: 'WeVoteGitHub',
    pageType: 'github',
  },
  'https://google.com': {
    pageName: 'GoogleSearch',
    pageType: 'search',
  },
  'https://help.wevote.us/hc/en-us': {
    pageName: 'WeVoteSupport',
    pageType: 'support',
  },
  'https://help.wevote.us/hc/en-us/articles/360034261733-How-were-the-Values-within-We-Vote-chosen-': {
    pageName: 'WeVoteValues',
    pageType: 'support',
  },
  'https://help.wevote.us/hc/en-us/requests/new': {
    pageName: 'HelpContact',
    pageType: 'help',
  },
  'https://play.google.com/store/apps/details?id=org.wevote.cordova&hl=en_US': {
    pageName: 'AppStoreAndroid',
    pageType: 'appStore',
  },
  'https://wevote.applytojob.com/apply': {
    pageName: 'WeVoteVolunteer',
    pageType: 'career',
  },
  'https://www.WeVoteEducation.org': {
    pageName: 'WeVoteEducation',
    pageType: 'organization',
  },
  'https://www.WeVoteUSA.org': {
    pageName: 'WeVoteUSA',
    pageType: 'organization',
  },
};

// TODO Update to recognize social sites, and other regular places we send people
function calculatePageNameAndPageTypeDictForExternalUrls (path) {
  // If it's a WeVote URL, use the existing function
  if (path.startsWith('/') || path.includes('wevote.us')) {
    return lookupPageNameAndPageTypeDict(path);
  }
  // console.log("gtmPageNameAndType, path:", path);
  let pageName = 'notSet'; // Per our naming convention for pageName, this would normally be 'NotSet' but I think the value of having pageName being identical to settingsPageType will save us grief in the future.
  let pageType = 'notSet';

  if (path.includes('/more/about')) {
    pageName = 'WeVoteTeam';
    pageType = 'about';
  } else if (path.includes('/more/credits')) {
    pageName = 'WeVoteCredits';
    pageType = 'about';
  } else if (path.startsWith('/ballot')) {
    pageName = 'Ballot';
    pageType = 'ballot';
  } else if (path.endsWith('/cs/')) {
    pageName = 'CampaignsHomeLoader';
    pageType = 'candidate';
  } else if (isPoliticianSEOFriendlyURL(path)) {
    pageType = 'politician';
    pageName = 'PoliticianDetailsPage';
  } else if (/^\/[^/\s]+$/.test(path)) {
    pageName = 'TwitterHandleLanding';
    pageType = 'twitterHandleLanding';
  } else if (path.startsWith('https://instagram.com')) {
    pageName = 'InstagramProfile';
    pageType = 'socialMedia';
  } else if (path.startsWith('https://x.com')) {
    pageName = 'InstagramProfile';
    pageType = 'socialMedia';
  }
  return {
    pageName,
    pageType,
  };
}

export default function lookupPageNameAndPageTypeDictForExternalUrls (path) {
  if (pageNameAndTypeSimpleDictForExternalUrls[path]) {
    return pageNameAndTypeSimpleDictForExternalUrls[path];
  } else {
    return calculatePageNameAndPageTypeDictForExternalUrls(path);
  }
}
