const result = [
  {
    userId: 1,
    email: 'admin1@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'jhon',
    rank: 1,
  },
  {
    userId: 2,
    email: 'admin2@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'suzan',
    rank: 2,
  },
  {
    userId: 3,
    email: 'admin3@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'ahoi',
    rank: 3,
  },
  {
    userId: 4,
    email: 'admin4@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'yoho',
    rank: 2,
  },
];

const resultRank = result.map(val => {

  if(val.rank === 1) {
    val.rank = '관리자';
  } else if(val.rank === 2) {
    val.rank = '팀장';
  } else if(val.rank === 3) {
    val.rank = '주임';
  } else if(val.rank === 4) {
    val.rank = '사원';
  } 
  return val;
});
console.log(resultRank);