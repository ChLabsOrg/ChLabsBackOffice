import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  margin-top: -13px;
  font-size: 1.2rem;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 1px solid white !important;
  clippath: inset(50%);
  margin: -1px;
  margin-top: -10px;
  padding: 0;
  position: relative;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 1;
  opacity: 0;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: var(--black-input-color);
  border-radius: 5px;
  transition: all 150ms;
  cursor: pointer;
  box-shadow: none;
  transform: translateY(-23px);
  padding: 3px;
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")}
  }
`;

interface ICheckBoxProps {
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelWrap?: boolean;
}

const Checkbox: React.FC<ICheckBoxProps> = ({
  className,
  checked,
  ...props
}) => {
  const content = (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return <>{content}</>;
};

export default Checkbox;