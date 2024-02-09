import PropTypes from 'prop-types';

const ContactItem = ({ name, number, id }) => {
  return (
    <li key={id}>
      {name} tel: {number}
    </li>
  );
};

export default ContactItem;

ContactItem.propType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
