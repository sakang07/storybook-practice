import React from 'react';
import PropTypes from "prop-types";
/**
 * PropTypes의 경우 => 런타임 체킹을 위한 도구
 * 예를 들어 TypeScript의 경우 => 정적 타입 검사 도구
 * 둘은 다른 개념이므로 상호 대체되는 개념은 아니다!
 * 개발자가 체크하지 못하고 있는 경우에 TypeScript는 실시간으로 에러를 알려줄 수 없음
 * Zod, Yup, Joi, Superstuct, io-ts, tcomb, ajv등의 라이브러리 및 Sentry같은 에러 트래킹 서비스 필요
 */
import './MyButton.css'

const Button = ({ primary, backgroundColor, size, label, radius, ...props }) => {
    const mode = primary ? 'storybook-button--primary': 'storybook-button--secondary';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={
                (backgroundColor && { backgroundColor },
                radius && { borderRadius: radius + 'px' })
            }
            {...props}>
            {label}
        </button>
    );
}

Button.PropTypes = {
    primary: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    radius: PropTypes.number,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    radius: null,
    onClick: undefined,
}

export default Button;