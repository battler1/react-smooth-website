import React from 'react';
import { Button } from '../ButtonElement';
import img1 from '../../images/wallet.svg';
import img2 from '../../images/account.svg';
import img3 from '../../images/signup.svg';
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
} from './InfoElements';

const InfoSection = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headLine,
	darkText,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
	dark2,
}) => {
	return (
		<>
			<InfoContainer id={id} lightBg={lightBg}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Button
										to="home"
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
										primary={primary ? 1 : 0}
										dark={dark ? 1 : 0}
										dark2={dark2 ? 1 : 0}
									>
										{buttonLabel}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img == 1 ? img1 : img == 2 ? img2 : img3} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default InfoSection;
