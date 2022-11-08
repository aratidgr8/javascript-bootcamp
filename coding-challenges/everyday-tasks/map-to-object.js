// Map data to frontend format. The main element is location key and we need to map all data to it. We will have 5 objects at the end.

const loc = [
    {
      location_key: [32, 22, 11],
      autoassign: 1,
    },
    {
      location_key: [41, 42],
      autoassign: 2,
    },
  ];
  
  const bulkConfig = [
    {
      dataValues: {
        config_key: 100,
      },
    },
    {
      dataValues: {
        config_key: 200,
      },
    },
  ];
  
  /**
   * Output expected 
   * [{config_key: 100, location_key: 32, autoassign: 1}, {config_key: 100, location_key: 22, autoassign: 1}]
   */
  
  const result = loc.map((el, index) => {
    return el.location_key.map(location => {
      return {
        location_key: location,
        config_key: bulkConfig[index].dataValues.config_key,
        autoassign: el.autoassign
      }
    })
  }).reduce((array, accumulator) => array.concat(accumulator), [])
  console.log(result)
  
  /**
   * map over `loc` array of objects
   * further map over `location_key` array
   * create & return an array of new object
   * `location_key` property assign every value in `location_key` array 
   * `config_key` property can be fetched from `bulkConfig` array at same index as `loc` 
   * `autoassign` property can be fetched from `loc` array
   *  finally to create flat array of objects we use `reduce` function
   */