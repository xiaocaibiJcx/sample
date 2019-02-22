function setStars(stars) {
  let num = stars.toString().substring(0, 1);
  let arr = [];
  for (let i = 1; i < 6; i++) {
    i <= num ? arr.push(1) : arr.push(0)
  }
  return arr;
}

function convertToCastString(casts) {
  let castsjoin = '';
  for (let idx in casts) {
    castsjoin = castsjoin + casts[idx].name + ' / '
  }
  return castsjoin.substring(0, castsjoin.length - 2)
}

function http(url, callback) {
  wx.request({
    url: url,
    data: {},
    method: 'GET',
    header: {
      "Content-Type": "json"
    },
    success(res) {
      callback(res.data)
    }
  })
}

function converToCastInfos(casts) {
  let castsArray = []
  casts.forEach((item) => {
    let cast = {
      img: item.avatars ? item.avatars.large : '',
      name: item.name
    }
    castsArray.push(cast)
  })
  return castsArray
}
module.exports = {
  setStars,
  http,
  convertToCastString,
  converToCastInfos
}