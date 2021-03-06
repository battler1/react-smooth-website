import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItmes,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterElements';

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItmes>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to="/signin">Testimonials</FooterLink>
							<FooterLink to="/signin">Careers</FooterLink>
							<FooterLink to="/signin">Investors</FooterLink>
							<FooterLink to="/signin">Terms of Services</FooterLink>
						</FooterLinkItmes>
						<FooterLinkItmes>
							<FooterLinkTitle>Contact Us</FooterLinkTitle>
							<FooterLink to="/">Contact</FooterLink>
							<FooterLink to="/">Support</FooterLink>
							<FooterLink to="/">Destinations</FooterLink>
							<FooterLink to="/">Sponsorships</FooterLink>
						</FooterLinkItmes>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItmes>
							<FooterLinkTitle>Videos</FooterLinkTitle>
							<FooterLink to="/">Submit Video</FooterLink>
							<FooterLink to="/">Ambassadors</FooterLink>
							<FooterLink to="/">Agency</FooterLink>
							<FooterLink to="/">Influencer</FooterLink>
						</FooterLinkItmes>
						<FooterLinkItmes>
							<FooterLinkTitle>Social Media</FooterLinkTitle>
							<FooterLink to="/">Instagram</FooterLink>
							<FooterLink to="/">Facebook</FooterLink>
							<FooterLink to="/">Youtube</FooterLink>
							<FooterLink to="/">Twitter</FooterLink>
						</FooterLinkItmes>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							dolla
						</SocialLogo>
						<WebsiteRights> @battler {new Date().getFullYear()} </WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Youtube">
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
