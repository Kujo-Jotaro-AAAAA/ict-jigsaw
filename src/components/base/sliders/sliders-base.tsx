import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Carousel, WingBlank } from 'antd-mobile';
import { autobind } from 'core-decorators';
import { ComponentPropsType } from '../../../types';

@autobind
@observer
class CTSlidersBase extends React.Component<ComponentPropsType> {
	@observable slideIndex: number = 0;
	@observable commentImageList: string[] = [];

	componentWillMount() {
	}

	render() {
		const { handleInnerClick, imgs, style } = this.props;
		return (
			<div onClick={handleInnerClick} style={style}>
				<WingBlank
				>
					<Carousel
						cellSpacing={6}
						slideWidth={0.74}
						infinite
						dots={false}
						afterChange={index => {
							this.slideIndex = index;
						}}>
						{Array.isArray(imgs) && imgs.map((item, index) => {
							return (
								<div
									key={index}
									style={{
										position: 'relative',
										marginTop: '10px',
										height: null,
										transition: 'all ease 500ms',
										backgroundColor: this.slideIndex === index ? '#FFE10F' : '#F1F1F1',
										transform: this.slideIndex === index ? 'scale(1)' : 'scale(0.9)'
									}}>
									<img
										src={item}
										style={{ width: '100%' }}
									/>
								</div>
							);
						})}
					</Carousel>
				</WingBlank>
			</div>
		)
	}
}
export default CTSlidersBase