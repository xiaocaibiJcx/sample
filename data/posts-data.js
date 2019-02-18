let local_database = [{
  avater: '/images/author/author_1.jpg',
  date: new Date().getMilliseconds(),
  title: '锦瑟',
  author: '李商隐',
  image: '/images/wx_1.jpg',
  content: '锦瑟无端五十弦，一弦一柱思华年;庄生晓梦迷蝴蝶，望帝春心托杜鹃;沧海月明珠有泪，蓝田日暖玉生烟;此情可待成追忆？只是当时已惘然;',
  star_num: 23,
  commont_num: 34,
  music: {
    url: 'http://dl.stream.qqmusic.qq.com/C400004TJkeL0SWB14.m4a?guid=5492368300&vkey=48C77FE1E740EC50AD604049FAE52CFA0CA1B929A1FFC90F06BEF5DAED6E2A3AADAB6790034023CA979B2D6EDFF411FA3A9D7F2F3435BED1&uin=0&fromtag=66',
    songs: '领悟-林俊杰',
    musicImg: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000006RpWI0A31hN.jpg?max_age=2592000'
  }
}, {
  avater: '/images/author/author_2.jpg',
  date: new Date().getMilliseconds(),
  title: '离思五首·其四',
  author: '元稹',
  image: '/images/wx_2.jpg',
  content: '曾经沧海难为水，除却巫山不是云。取次花丛懒回顾，半缘修道半缘君。',
  star_num: 23,
  commont_num: 34,
    music: {
      url: 'http://dl.stream.qqmusic.qq.com/C4000048c21M2KIs6x.m4a?guid=5179372866&vkey=EE84EF9F9434FE3053E80A434B499D6F68036AB5E4D28194D96A880FF19AC1BF4F57966A82EC15027334B1E3D1B7B9E71EB1B4B9356D11B2&uin=0&fromtag=66',
      songs: '月牙湾',
      musicImg: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002NRfsI2v6IJA.jpg?max_age=2592000'
    }
}, {
  avater: '/images/author/author_3.jpg',
  date: new Date().getMilliseconds(),
  title: '白头吟',
  author: '卓文君',
  image: '/images/wx_3.jpg',
  content: '皑如山上雪，皎若云间月。闻君有两意，故来相决绝。今日斗酒会，明旦沟水头。躞蹀御沟上，沟水东西流。凄凄复凄凄，嫁娶不须啼。愿得一心人，白头不相离。竹竿何袅袅，鱼尾何簁簁！男儿重意气，何用钱刀为！',
  star_num: 23,
  commont_num: 34,
    music: {
      url: 'http://dl.stream.qqmusic.qq.com/C400002JCOjn1Zjrrz.m4a?guid=5179372866&vkey=7E95484037EEC0965852D59E6B06A1A2B9EB4F376346A2B40BC2E515F642F7BDCAE8392642ED326A24EC2A909FAD05C52F11D555CE187D1A&uin=0&fromtag=66',
      songs: '水星记-郭顶',
      musicImg: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Rjfrr0BXKpX.jpg?max_age=2592000'
    }
}, {
  avater: '/images/author/author_4.jpg',
  date: new Date().getMilliseconds(),
  title: '折桂令·春情',
  author: '徐再思',
  image: '/images/wx_1.jpg',
  content: '平生不会相思，才会相思，便害相思。身似浮云，心如飞絮，气若游丝。空一缕余香在此，盼千金游子何之。证候来时，正是何时？灯半昏时，月半明时。',
  star_num: 23,
  commont_num: 34,
    music: {
      url: 'http://183.131.60.22/amobile.music.tc.qq.com/C4000013CxwQ4DRfLX.m4a?guid=5179372866&vkey=42F081DA3B70336915AE2702CA88057CEE050500596623AF42785095642CD892C83C87FB37FE6304659DBAC71351DC038114658A484C2C40&uin=0&fromtag=66',
      songs: '不能说的秘密-林俊杰',
      musicImg: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000036j7wI1lqdIF.jpg?max_age=2592000'
    }
}, {
  avater: '/images/author/author_5.jpg',
  date: new Date().getMilliseconds(),
  title: '望月怀远',
  author: '张九龄',
  image: '/images/wx_2.jpg',
  content: '海上生明月，天涯共此时。情人怨遥夜，竟夕起相思。灭烛怜光满，披衣觉露滋。不堪盈手赠，还寝梦佳期。',
  star_num: 23,
  commont_num: 34,
    music: {
      url: 'http://183.131.48.149/amobile.music.tc.qq.com/C4000009n8YD3Nh2rR.m4a?guid=5179372866&vkey=E6241A4F3A75B31E9A08FE1F11474F49704117BA643D2D8315C62CB849FD0D982A87B345175DBC6DA65E1729A23FA74F6A4331497E09F7A4&uin=0&fromtag=66',
      songs: '雪落下的声音-林俊杰',
      musicImg: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000036j7wI1lqdIF.jpg?max_age=2592000'
    }
}]
module.exports = {
  postList: local_database
}