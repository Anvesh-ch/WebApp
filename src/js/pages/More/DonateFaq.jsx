import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { PageContentContainer } from '../../components/Style/pageLayoutStyles';
import DesignTokenColors from '../../common/components/Style/DesignTokenColors';

function DonateFaq () {
  return (
    <PageContentContainer>
      <Helmet>
        <title>WeVote Donation FAQ</title>
      </Helmet>
      <StyledFaq>
        <h1>WeVote Donation FAQ</h1>

        <h2>About WeVote</h2>

        <h3>What is WeVote?</h3>
        <p>
          WeVote is a nonpartisan, nonprofit organization committed to empowering informed participation in democracy.
          Through innovative technology, trusted data, and collaborative partnerships, we help people vote their values
          and engage meaningfully in civic life. We Vote is where you view your ballot, see endorsements from your network
          for all candidates and measures, and collaborate with folks who share your values.
        </p>
        <p>
          We Vote is a volunteer-driven movement. We rely on volunteers across the country who use their engineering,
          design, and other skills to build WeVote. We are over 100 people who have donated 12,000+ volunteer hours,
          including 90+ contributors on GitHub. We also have a small team of core staff and volunteer board members. See:
          {' '}
          <a
            href="https://quality.wevote.us/more/faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            WeVote FAQ
          </a>
          {' '}
          and
          {' '}
          <a
            href="https://help.wevote.us/hc/en-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help Center
          </a>
          .
        </p>

        <h3>Is WeVote a nonprofit organization?</h3>
        <p>
          Yes. WeVote is a collaboration between two nonprofits:
          {' '}
          <a
            href="https://www.wevoteeducation.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            WeVoteEducation.org
          </a>
          {' '}
          – 501(c)(3) (FEIN 47-2691544) and
          {' '}
          <a
            href="https://www.wevoteusa.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            WeVoteUSA.org
          </a>
          {' '}
          – 501(c)(4) (FEIN 81-1052585), both based in Oakland, CA.
          We do not support or oppose any political candidate or party.
          We are not affiliated with WeVoteProject.org or WeVoteUSA.com.
          All donations are tax-deductible to the fullest extent allowed by U.S. law.
        </p>

        <h3>What is the difference between a (c)(3) and a (c)(4) nonprofit?</h3>
        <p>
          A 501(c)(3) nonprofit is organized for charitable, religious, educational, or scientific purposes.
          Contributions to 501(c)(3) organizations are tax-deductible, which means donors can generally deduct their gifts
          on their federal tax returns. These organizations are limited in how much lobbying they can do and are prohibited
          from supporting or opposing political candidates.
        </p>
        <p>
          A 501(c)(4) nonprofit is organized to promote social welfare or community benefit. Contributions to 501(c)(4)
          organizations are not tax-deductible. Unlike 501(c)(3)s, they can engage in unlimited lobbying and some political
          activities, as long as political work is not their primary purpose.
        </p>
        <p><strong>In short:</strong></p>
        <ul>
          <li>501(c)(3): Tax-deductible donations; primarily charitable; limited lobbying; no political campaigns.</li>
          <li>501(c)(4): Not tax-deductible; primarily social welfare; can lobby freely; may engage in some political activity.</li>
        </ul>

        <h3>Is WeVote affiliated with a political party?</h3>
        <p>No. WeVote is completely nonpartisan. We do not support or oppose any political candidate or party.</p>

        <h3>How does WeVote work?</h3>
        <p>
          We Vote is a nonprofit technology startup, creating a digital voter guide informed by issues you care about, and
          people you trust. Through our nonpartisan, open source platform, we&apos;ll help you become a better voter, up and down the ballot.
        </p>
        <p>
          We have a mobile-ready website, as well as iPhone and Android apps. We are free and open source:
          {' '}
          <a
            href="https://github.com/WeVote"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/WeVote
          </a>
          . Through this site, you can follow people and groups you trust to get info on candidates and ballot measures.
          Ask your friends what they think. Then take WeVote with you to the polls for an easy-to-use cheat sheet.
        </p>

        <h2>Giving to WeVote</h2>

        <h3>Why should I donate to WeVote?</h3>
        <p>
          Your donation directly supports voter education, access to nonpartisan ballot guides, and technology that supports our
          work to help millions of voters make informed decisions. We believe democracy works best when everyone can participate
          with confidence and clarity.
        </p>
        <h3>What impact does my donation have?</h3>
        <ul>
          <li>$1 can empower 1 voter with their ballot recommendations, up and down the ballot.</li>
          <li>$50 can introduce 500 new voters to WeVote.</li>
          <li>$100 can collect candidate data for 50 candidates.</li>
          <li>$250 can support our collaboration systems for 1 week.</li>
          <li>$250 will power our digital infrastructure for 1 week.</li>
          <li>$500 keeps our website online for 1 week.</li>
          <li>$600+ can help cover server costs ($600–$2,500/mo), data fees (~$40k/yr), and collaboration tools.</li>
        </ul>
        <p>Your support powers the tools, outreach, and education needed to strengthen democracy.</p>

        <h3>How can I make a gift?</h3>
        <ul>
          <li>
            Online:
            <a href="http://wevote.us/donate" target="_blank" rel="noopener noreferrer">wevote.us/donate</a>
          </li>
          <li>P2P Payment Platforms: Venmo, PayPal, CashApp, Zelle</li>
          <li>By Mail: WeVote, 1423 Broadway PMB 158, Oakland, CA 94612</li>
          <li>Other Methods: Stock, donor-advised funds, and wire transfers</li>
        </ul>

        <h3>Is there a limit to how much I can donate?</h3>
        <p>No. There are no legal limits for 501(c)(3) donations, but large gifts may have tax reporting implications—consult a tax advisor.</p>

        <h3>Can I make a recurring donation?</h3>
        <p>Yes. Monthly or annual recurring donations are especially helpful for ongoing costs.</p>

        <h3>Can I update or cancel my recurring donation?</h3>
        <p>Yes. You can change the amount, payment method, or cancel at any time.</p>

        <h3>Is my online donation secure?</h3>
        <p>Yes. We use Donorbox, which encrypts payment info, does not store credit card data, and tokenizes account details.</p>

        <h3>Can I donate in honor or in memory of someone?</h3>
        <p>Yes. You can dedicate your donation during the online giving process.</p>

        <h3>Can I make an anonymous donation?</h3>
        <p>Yes. Contact us to keep your gift anonymous. The IRS generally does not require public disclosure of donor names for 501(c)(3) orgs.</p>

        <h3>How are my donations acknowledged?</h3>
        <p>We send a receipt for every gift. Recurring donors also get an annual statement for tax purposes.</p>

        <h3>Are donations close to Election Day still helpful?</h3>
        <p>Yes. Last-minute donations help us update information and scale outreach when it matters most.</p>

        <h3>Can I direct my donation to a specific group or state?</h3>
        <p>No. All gifts support our national mission, serving voters in all 50 states.</p>

        <h2>Tax & Receipts</h2>
        <p>Donations to 501(c)(3) WeVoteEducation.org are tax-deductible; 501(c)(4) WeVoteUSA.org are not.</p>

        <h2>Employer & Matching Gifts</h2>
        <p>
          Many employers match donations. Check with HR or use the
          {' '}
          <a href="https://www.charitynavigator.org/donor-basics/giving-101/employee-match-programs/" target="_blank" rel="noopener noreferrer">Charity Navigator tool</a>
          .
        </p>

        <h2>Other Ways to Give</h2>
        <p>We accept stock, DAFs, IRA charitable rollovers, and wire transfers. Email us for details.</p>

        <h2>Need More Help?</h2>
        <p>
          Fill out our {' '}
          <a href="https://help.wevote.us/hc/en-us/requests/new" target="_blank" rel="noopener noreferrer">Contact Form</a>
          {' '}
          for donation questions.
        </p>
      </StyledFaq>
    </PageContentContainer>
  );
}

export default DonateFaq;

const StyledFaq = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #ddd;
    padding-bottom: 0.3rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  a {
    color: ${DesignTokenColors.primary500};
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;
