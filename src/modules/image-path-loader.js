const getImagesPath = () =>{
    const context = require.context('../images/menu-items', true, /.png$/);
    const obj = {};
    context.keys().forEach((key) => {
      const menuItem = key.split('./').pop() // remove the first 2 characters
        .substring(0, key.length - 6); // remove the file extension
      obj[menuItem] = context(key);
    });
    return obj
}

export{
  getImagesPath
}