import React from 'react';
import Icon from '../index';

const QueueIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M4,8 C4,7.44771525 4.45576096,7 5.00247329,7 L14.9975267,7 C15.5511774,7 16,7.44386482 16,8 C16,8.55228475 15.544239,9 14.9975267,9 L5.00247329,9 C4.44882258,9 4,8.55613518 4,8 Z M4,12 C4,11.4477153 4.45576096,11 5.00247329,11 L14.9975267,11 C15.5511774,11 16,11.4438648 16,12 C16,12.5522847 15.544239,13 14.9975267,13 L5.00247329,13 C4.44882258,13 4,12.5561352 4,12 Z M4,4 C4,3.44771525 4.45576096,3 5.00247329,3 L14.9975267,3 C15.5511774,3 16,3.44386482 16,4 C16,4.55228475 15.544239,5 14.9975267,5 L5.00247329,5 C4.44882258,5 4,4.55613518 4,4 Z M0,4 C0,3.44771525 0.443864822,3 1,3 C1.55228475,3 2,3.44386482 2,4 C2,4.55228475 1.55613518,5 1,5 C0.44771525,5 0,4.55613518 0,4 Z M0,8 C0,7.44771525 0.443864822,7 1,7 C1.55228475,7 2,7.44386482 2,8 C2,8.55228475 1.55613518,9 1,9 C0.44771525,9 0,8.55613518 0,8 Z M0,12 C0,11.4477153 0.443864822,11 1,11 C1.55228475,11 2,11.4438648 2,12 C2,12.5522847 1.55613518,13 1,13 C0.44771525,13 0,12.5561352 0,12 Z" />
  </Icon>;

QueueIcon.propTypes = {
  ...Icon.propTypes,
};

export default QueueIcon;