/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx141e027b16883b21',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'dabef085161d3f87b32a15cb0210c782',

  PROVINCE: '湖北',
  CITY: '武汉',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'HL_daily',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oMMmL6A9_LBHe9Iyl32_TzOeJhM0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '7hhwoxYd9KvUuUXFRm3LosqYv9KQNloBlDtidolkoyc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: 'Holly宝贝', year: '2000', date: '03-18',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {
//           type: '生日', name: 'Holly宝贝', year: '2000', date: '04-22',
//         },
        {
          type: '节日', name: '相识纪念日（飞机上相遇）', year: '2021', date: '06-07',
        },
//         {
//           type: '节日', name: '我宝宝离汉回嘉鱼', year: '2023', date: '07-25',
//         },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-06-27' },
//         // 离汉日期
//         { keyword: 'leave_day', date: '2023-07-25' },
      ],
    },
//     {
//       // 想要发送的人的名字
//       name: 'HL_Luck',
//       // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
//       id: 'oMMmL6A9_LBHe9Iyl32_TzOeJhM0',
//       // 使用微信测试号：你想对他发送的模板消息的模板ID
//       useTemplateId: 'eEcS-KyJ-9zUmXL9Ltql2Y9GYrMRDcCufkWLgEKXoE8',
//       // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
//       horoscopeDate: '04-22',
//       festivals: [
//         // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//         {
//           type: '*生日', name: 'Holly宝贝', year: '2000', date: '03-18',
//         },
//         // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
// //         {
// //           type: '生日', name: 'Holly宝贝', year: '2000', date: '04-22',
// //         },
//         {
//           type: '节日', name: '相识纪念日（飞机上相遇）', year: '2021', date: '06-07',
//         },
//         {
//           type: '节日', name: '离汉回嘉鱼', year: '2023', date: '07-25',
//         },
//       ],
//       // 我们在一起已经有xxxx天了的配置
//       customizedDateList: [
//         // 在一起的日子
//         { keyword: 'love_day', date: '2021-06-27' },
// //         // 离汉日期
// //         { keyword: 'leave_day', date: '2023-07-25' },
//       ],
//     },
//     {
//       // 想要发送的人的名字
//       name: 'HL_Happy',
//       // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
//       id: 'oMMmL6A9_LBHe9Iyl32_TzOeJhM0',
//       // 使用微信测试号：你想对他发送的模板消息的模板ID
//       useTemplateId: 'SSuknkygv9Rvh0TCvDhffxcXlVzmXnumXILB0rlCTs0',
//       // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
//       horoscopeDate: '04-22',
//       festivals: [
//         // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//         {
//           type: '*生日', name: 'Holly宝贝', year: '2000', date: '03-18',
//         },
//         // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
// //         {
// //           type: '生日', name: 'Holly宝贝', year: '2000', date: '04-22',
// //         },
//         {
//           type: '节日', name: '相识纪念日（飞机上相遇）', year: '2021', date: '06-07',
//         },
//         {
//           type: '节日', name: '离汉回嘉鱼', year: '2023', date: '07-25',
//         },
//       ],
//       // 我们在一起已经有xxxx天了的配置
//       customizedDateList: [
//         // 在一起的日子
//         { keyword: 'love_day', date: '2021-06-27' },
// //         // 离汉日期
// //         { keyword: 'leave_day', date: '2023-07-25' },
//       ],
//     },
//     {
//       // 想要发送的人的名字
//       name: 'HL_Luck',
//       // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
//       id: 'oMMmL6A9_LBHe9Iyl32_TzOeJhM0',
//       // 使用微信测试号：你想对他发送的模板消息的模板ID
//       useTemplateId: 'hkSHMAzLCdPaLu2xJAlG5y_fE5vr_r0BHM6HWAfAVTc',
//       // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
//       horoscopeDate: '04-22',
//       festivals: [
//         // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//         {
//           type: '*生日', name: 'Holly宝贝', year: '2000', date: '03-18',
//         },
//         // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
// //         {
// //           type: '生日', name: 'Holly宝贝', year: '2000', date: '04-22',
// //         },
//         {
//           type: '节日', name: '相识纪念日（飞机上相遇）', year: '2021', date: '06-07',
//         },
//         {
//           type: '节日', name: '离汉回嘉鱼', year: '2023', date: '07-25',
//         },
//       ],
//       // 我们在一起已经有xxxx天了的配置
//       customizedDateList: [
//         // 在一起的日子
//         { keyword: 'love_day', date: '2021-06-27' },
// //         // 离汉日期
// //         { keyword: 'leave_day', date: '2023-07-25' },
//       ],
//     },
//     {
//       // 想要发送的人的名字
//       name: 'HL_Luck',
//       // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
//       id: 'oMMmL6A9_LBHe9Iyl32_TzOeJhM0',
//       // 使用微信测试号：你想对他发送的模板消息的模板ID
//       useTemplateId: 'hkSHMAzLCdPaLu2xJAlG5y_fE5vr_r0BHM6HWAfAVTc',
//       // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
//       horoscopeDate: '04-22',
//       festivals: [
//         // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//         {
//           type: '*生日', name: 'Holly宝贝', year: '2000', date: '03-18',
//         },
//         // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
// //         {
// //           type: '生日', name: 'Holly宝贝', year: '2000', date: '04-22',
// //         },
//         {
//           type: '节日', name: '相识纪念日（飞机上相遇）', year: '2021', date: '06-07',
//         },
//         {
//           type: '节日', name: '离汉回嘉鱼', year: '2023', date: '07-25',
//         },
//       ],
//       // 我们在一起已经有xxxx天了的配置
//       customizedDateList: [
//         // 在一起的日子
//         { keyword: 'love_day', date: '2021-06-27' },
// //         // 离汉日期
// //         { keyword: 'leave_day', date: '2023-07-25' },
//       ],
//     }
  ],

  TIAN_API: {
    key: '7b68d710c12fd751cf299b7b258b1c84',
    
    morningGreeting: true,
  },

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'SnoMwv60soVb_5bqN6iBupMo3vWgRzo0T6rnAVIcSDE',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oMMmL6A9_LBHe9Iyl32_TzOeJhM0',
    }
  ],

}

module.exports = USER_CONFIG

