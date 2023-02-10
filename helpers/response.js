exports.format = (response) => {
    return {
      status: response.status,
      message: response.message,
      data: response.data,
    };
  };