import dns from 'dns/promises';

// ip 주소는 dns.lookup(도메인) or dns.resolve(도메인)으로 얻을 수 있음
const ip = await dns.lookup('gilbut.co.kr');
console.log('IP', ip);

const a = await dns.resolve('gilbut.co.kr', 'A'); // 'A' : IPv4 addresses (default), 'AAAA' : IPv6 addresses
console.log('A', a);

const mx = await dns.resolve('gilbut.co.kr', 'MX'); // mail exchange records
console.log('MX', mx);

const cname = await dns.resolve('www.gilbut.co.kr', 'CNAME'); // canonical name records
console.log('CNAME', cname);

const any = await dns.resolve('gilbut.co.kr', 'ANY'); // any records
console.log('ANY', any);

// https://nodejs.org/api/dns.html#dnspromisesresolvehostname-rrtype
