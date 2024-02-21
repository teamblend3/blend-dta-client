import PropTypes from "prop-types";

import FormSelect from "../../components/Form/FormSelect";

function SelectSection({ list, collection, setCollection }) {
  const handleSelect = e => {
    setCollection(e.target.value);
  };

  const options = list.map(collectionName => ({ name: collectionName }));

  return (
    <section className="flex items-center sm:space-x-10 w-full mt-4">
      <FormSelect
        id="collectionName"
        options={options}
        value={collection}
        handleChange={handleSelect}
      />
    </section>
  );
}

SelectSection.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  collection: PropTypes.string.isRequired,
  setCollection: PropTypes.func.isRequired,
};

export default SelectSection;
