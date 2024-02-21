export const formatDate = dateString => dateString?.slice(0, 10);

export const transformData = (schema, collection, dataPreview) => {
  const schemaObj = schema?.reduce((acc, item) => {
    const [key, value] = Object.entries(item)[0];
    acc[key] = value;
    return acc;
  }, {});

  const result = schemaObj[collection]
    .sort((a, b) => a._id.localeCompare(b._id))
    .map(data => ({ field: data._id, type: data.types[0] }));

  const preparedData = dataPreview?.map(dataRow =>
    dataRow.reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {}),
  );

  const lastData = JSON.stringify(preparedData, null, 2);

  return { result, lastData };
};
