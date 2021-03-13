// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dictionary = [

  {
    en: "I can't take a ticket this week because I have already taken 3.",
    jp: 'すでに3つチケットを取っているので、今週は取れません。',
  },
  {
    en: 'I made a pull request yesterday.',
    jp: '昨日、プルリクを出しました。',
  },
  {
    en: "I'm developing X now.",
    jp: '今、Xを開発しています。',
  },
  {
    en: "I think I'll revise it by the end of today.",
    jp: '修正は今日中に終わると思います。',
  },
  {
    en: 'I merged X with Y.',
    jp: 'XをYにマージしました。',
  },
  {
    en: "I'm working on this ticket with Ken.",
    jp: 'このチケットは、Kenさんと一緒に進めています。',
  },
  {
    en: 'I realized that the system was not working properly.',
    jp: 'システムがちゃんと動いてないことがわかった。',
  },
  {
    en: "It seems that we'll make the release next week.",
    jp: '来週のリリースには間に合いそうです。',
  },
  {
    en: 'Is there anything ready for QA?',
    jp: 'QAしてもらえる状態のものがありますか。',
  },
  {
    en: 'We found some issues.',
    jp: '課題が見つかった。',
  },
  {
    en: "I'll share requirements with TLs tomorrow.",
    jp: '要件は明日、テックリード(TL)に共有します。',
  },
  {
    en: "The specs haven't been decided yet.",
    jp: 'まだ仕様が決まってない。',
  },
  {
    en: "The specs haven't taken shape yet.",
    jp: 'まだ仕様が固まっていません。',
  },
  {
    en: 'It interferes with it (our project).',
    jp: 'それによって(プロジェクトに)支障が出ています。',
  },
  {
    en: 'This is not an incident that has an effect on customers.',
    jp: 'これは、お客様に影響があるインシデントじゃないです。',
  },
  {
    en: 'I will look into the causes now.',
    jp: 'これから原因を調べます。',
  },
  {
    en: "I'll consult with my manager.",
    jp: 'マネージャーに相談する。',
  },
  {
    en: 'Do you have any difficulties?',
    jp: '何か困ってることがありますか。',
  },
  {
    en: 'We are aligned with team B to do this (task).',
    jp: 'これはteam Bと連携してやっていきます。',
  },
  {
    en: 'I will sync with TL later.',
    jp: 'あとでテックリード(TL)とsyncしておきます。',
  },
  {
    en: "I'll set goals / I am setting goals.",
    jp: '目標を設定する。',
  },
  {
    en: "I edited it last week, but it isn't reflected on Jira (yet).",
    jp: '先週修正したけど、Jiraに反映されてません。',
  },
  {
    en: 'That method seems efficient.',
    jp: 'そのやり方は、効率がよさそう。',
  },

  {
    en: 'Please check the docs for details.',
    jp: '詳細はdocsを見てください。',
  },
  {
    en: 'Could you tell me about the incident in detail?',
    jp: 'どんなインシデントだったか詳しく教えてもらえますか。',
  },
  {
    en: 'The company policy has not been decided yet.',
    jp: 'まだ会社の方針が決まってない。',
  },
  {
    en: 'Let me add something to what Ken said,',
    jp: 'ケンさんの話への補足なんですけど、、、',
  },
  {
    en: 'I think this way is effective.',
    jp: 'このやり方が効果的だと思います。',
  },
  {
    en: 'We achieved our OKR last week.',
    jp: '先週、OKRを達成しました。',
  },
  {
    en: 'I will report on the project.',
    jp: 'プロジェクトについて報告します。',
  },
  {
    en: 'EMs are discussing it now.',
    jp: 'それはEMが議論しているところです。',
  },
  {
    en: "There are some defects, so I'll fix it by the end of the day.",
    jp: 'ちょっと不具合があるので、今日中に直します。',
  },
  {
    en: 'This is working well.',
    jp: 'これは、順調に進んでいます。',
  },
  {
    en: 'There are too many tasks.',
    jp: 'タスクの量が多すぎます。',
  },
  {
    en: 'Could you expain the incident more concretely?',
    jp: '具体的にどんなインシデントでしたか。',
  },
  {
    en: "We're in a tough situation in terms of QA resources.",
    jp: 'QAのリソースが厳しい状況です。',
  },
  {
    en: "I'll explain about the present situation.",
    jp: '現状を説明します。',
  },
  {
    en: "Let's start with a progress check.",
    jp: 'まずは、進捗確認をしましょう。',
  },
  {
    en: 'I think we should decide the priority.',
    jp: '優先順位を決めたほうがいいと思います。',
  },
  {
    en: 'Are there any tickets left?',
    jp: '残っているチケットはありますか。',
  },
  {
    en: 'Have you already initiated it? ',
    jp: 'それって、もう着手してますか？',
  },
  {
    en: "I'm thinking I should adjust my workload because I've been too busy these days.",
    jp: '最近忙しすぎるので、タスクの量を調整したほうがいいいと思っています。',
  },
  {
    en: "I'd like to make sure everyone's on the same page.",
    jp: '全員で認識を合わせたいです。',
  },
  {
    en: "I'd like to make sure there's no misunderstanding between us.",
    jp: '認識がずれてないか確認したいです。',
  },
  {
    en: 'The schedule has been changed.',
    jp: 'スケジュールが変更しています。',
  },
  {
    en: 'We will start a campaign next week.',
    jp: '来週からキャンペーンが開始します。',
  },
  {
    en: "Let's move up this project. (Ex: from next qtr to this qtr)",
    jp: 'このプロジェクトは、前倒しで進めましょう',
  },
  {
    en: "We're planning to do a code review sometime after next week.",
    jp: 'コードレビューは、来週以降の予定です',
  },
  {
    en: 'When is the due date?',
    jp: '締切はいつですか。',
  },
  {
    en: "Please go ahead with the meeting without me as I'm running late due to another meeting.",
    jp: '他のミーティングがあって、ちょっと遅れるので、先に始めてください。',
  },
  {
    en: 'Please write the topics you want to talk about in advance.',
    jp: '話したいトピックは、事前に書いておいてください。',
  },
  {
    en: 'I think we should work on this earlier because we will release it next week.',
    jp: 'これは来週リリースなので、早めにやった方がいいと思います。',
  },
  {
    en: "Let's move forward in this way, temporarily. ",
    jp: '一旦、このやり方で進めましょう。',
  },
  {
    en: 'Everything has been reflected in the test environment.',
    jp: 'すべてテスト環境に反映しました。',
  },
  {
    en: 'The internet environment (ex: wifi) here is bad, which is hindering our business.',
    jp: 'ネット環境が悪くて、業務に支障が出ています。',
  },
  {
    en: 'What features do you think would be more beneficial for our customers?',
    jp: 'どんな機能があったら、もっとお客様のためになると思う?',
  },
  {
    en: 'That operation is not working properly. ',
    jp: 'これは、ちゃんと運用ができていません。',
  },
  {
    en: "From QA's point of view, the priority of this task is low.",
    jp: 'QAの観点からすると、このタスクの優先順位は低いです。',
  },
  {
    en: 'Which one is the most important issue?',
    jp: 'どれが一番重要な問題ですか。',
  },
  {
    en: 'Can you share your screen?',
    jp: '画面共有してもらえる？',
  },
  {
    en: 'I completed the deployment yesterday.',
    jp: '昨日、デプロイ、完了しました。',
  },
  {
    en: 'When are you going to test the operation?',
    jp: '動作確認はいつしますか。',
  },
  {
    en: "We're going to implement this next week.",
    jp: 'これは来週実装します',
  },
  {
    en: "It's stable now since I've resolved the bugs.",
    jp: '(それは、)バ グを直したので、今は安定しています。',
  },
  {
    en: 'An issue occurred when I was on call.',
    jp: 'オンコールのときに、問題が発生しました。',
  },
  {
    en: "For this issue, our team doesn't need to deal with it since another team will.",
    jp: 'これは、他のチームが対応してくれるので、うちのチームはしなくていいです。',
  },
  {
    en: "I'll delete this because there are two tickets with the same content on Jira.",
    jp: 'Jiraに同じ内容のチケットが２つあるので、こっちは削除しますね。',
  },
  {
    en: 'Sorry, I forgot to save it after I fixed it.',
    jp: 'すみません、修正したあと、保存し忘れました。',
  },
  {
    en: "We're now thinking about how to roll it back.",
    jp: 'ロールバックのやり方は今検討中です。',
  },
  {
    en: "Who's the person related to this ticket?",
    jp: 'このチケットに関係してる人って、誰だっけ？',
  },
  {
    en: "Let's continue the weekly sync meetings as we've been doing.",
    jp: 'weekly sync ミーティングは、今後も継続していきましょう。',
  },
  {
    en: "How do you measure if you've achieved your goal or not?",
    jp: 'この目標を達成したかどうかをどうやって測りますか。',
  },
  {
    en: 'This screen layout makes it difficult to use the search function.',
    jp: 'この画面は検索しにくいですね。',
  },

  {
    en: 'The release period is being adjusted.',
    jp: 'リリースの時期は、調整中です。',
  },
  {
    en: "The schedule hasn't been decided yet.",
    jp: 'スケジュールは未確定です。',
  },
  {
    en: 'The lack of communication among team members is becoming a problem.',
    jp: 'チーム内のコミュニケーション不足が、問題になっています。',
  },
  {
    en: "We don't have time to spare since we have a lot of releases this month.",
    jp: '今月は、リリースが多くて、みんな余裕があんまりない。',
  },
  {
    en: "Since the system isn't working normally, Suzuki-san is going to check on it today.",
    jp: 'システムが正常に動いてないので、今日中に鈴木さんが確認する予定になっています。',
  },
  {
    en: "I think it's better to make this the top priority because the release is next week.",
    jp: 'これはリリースが来週なので、最優先で進めたほうがいいと思います。',
  },
  {
    en: 'Please talk to your manager directly if you have any problems.',
    jp: '困ったことがあったら、直接マネージャーに相談してください。',
  },
  {
    en: 'Are you in the middle of working on this ticket?',
    jp: '今、このチケットをやってる途中ですか。',
  },
  {
    en: 'I completed the refund process yesterday.',
    jp: '返金処理は、昨日、完了しました。',
  },
  {
    en: 'What time is access to the site most concentrated? ',
    jp: 'サイトへのアクセスは、どの時間帯が一番集中しますか。',
  },
  {
    en: 'A system delay happened last night. ',
    jp: '昨日の夜、システムに遅延が発生しました。',
  },
  {
    en: "I'll work on updating this tomorrow.",
    jp: '明日、バージョンアップする作業をします。',
  },
  {
    en: 'Do you know which team is responsible for this work?',
    jp: 'この業務は、どこのチームが担当してるか知ってる？',
  },
  {
    en: 'Please add the topics you want to talk about to the notes.',
    jp: '話したいトピックがある人は、議事録に追加しておいてくださいね。',
  },
  {
    en: 'If you want to suggest anything, please DM me by tomorrow.',
    jp: '何か提案がある人は、明日までに私にDMしてください。',
  },
  {
    en: "The timing of implementing the new service hasn't been decided yet.",
    jp: '新しいサービスを導入する時期はまだ決まってません。',
  },
  {
    en: 'The service went down temporarily late last night because of a spike in access.',
    jp: '夜中にアクセスが集中して、サービスが一時的に落ちました。',
  },
  {
    en: "Tickets that we won't deal with this Q will be moved to the next sprint.",
    jp: '今Q対応しないチケットは、次のSprintに移動しておきます。',
  },
  {
    en: "Sorry, I can't join tomorrow's stand up because of a schedule conflict.",
    jp: 'すみません、他のミーティングと被ってるので、明日のスタンドアップミーティングに参加できません。',
  },
  {
    en: '[Situation: In a meeting] Sorry, I need to leave now because I have another meeting.',
    jp: '【状況：ミーティングに出席中】すみません、次のミーティングがあるので、先に抜けますね。',
  },
  {
    en: "Please take it easy now since we're going to be quite busy next month.",
    jp: '来月はけっこう忙しくなると思うので、みなさん、今のうちにゆっくり休んでくださいね。',
  },
  {
    en: "It'll be really tight, but I think I'll just barely get the ticket done by the deadline.",
    jp: 'このチケットは、ギリギリになりそうですが、締切までに終わると思います。',
  },
  {
    en: "Basically, everyone's assignments won't change much from this Q to next Q.",
    jp: '基本的に、来Qのみなさんのアサインは、今Qと変更ありません。',
  },
  {
    en: 'Also, do you know when the release period will be decided? Approximately?',
    jp: 'ちなみに、いつぐらいまでにリリースの時期が決まるか、わかりますか。',
  },
  {
    en: "Think about it from the customer's point of view.",
    jp: 'お客様視点で考えてみて。',
  },

  {
    en: 'We still have about 10 minutes left, shall we just chat? ',
    jp: 'まだ10分ぐらいあるので、ちょっと雑談でもしましょうか。',
  },
  {
    en: "I'm in the preparation phase of the test now.",
    jp: '今は、テストの準備をしている段階です。',
  },
  {
    en: "I'll check the existing sources and then think about it.",
    jp: '既存のソースを見て、考えてみます。',
  },
  {
    en: 'There was a similar case last week.',
    jp: '先週、それに似た事例がありました。',
  },
  {
    en: "I think it'll be difficult to maintain the QA quality if we move the release date up.",
    jp: 'リリースを早めると、QAの品質を保つのは難しくなると思います。',
  },
  {
    en: "When do you think we'll finish processing the refund?",
    jp: '返金処理は、いつ完了しそうですか。',
  },
  {
    en: 'A lot of system errors have been happening these days.',
    jp: '最近、障害が多く発生している。',
  },
  {
    en: 'There are no critical failures yet. ',
    jp: '今のところ、クリティカルな障害は起きてません。',
  },
  {
    en: 'Hold on, Chrome is acting weird. ',
    jp: 'ちょっと待って、Chromeの挙動がおかしい。',
  },
  {
    en: 'Is there something you plan to do QA for next week? ',
    jp: '来週QAする予定のやつ、ある？',
  },
  {
    en: "I've made a schedule for the next release, so please check it by the end of today if you haven't.",
    jp: 'リリースまでのスケジュールを作成したので、まだ見てない人は、今日中に確認してください。',
  },
  {
    en: 'Please check here for the important points about planning AB tests.',
    jp: 'ABテストを設計するときの注意点については、ここを読んどいてください。',
  },
  {
    en: 'This document is now open to everyone.',
    jp: 'この資料は、全メンバーに展開されています。',
  },
  {
    en: 'We should think about this more in order to decide the details. ',
    jp: 'この件、もう少し詰めた方がいいですね。',
  },
  {
    en: "I've delegated this project to Sato-san.",
    jp: 'このプロジェクトは、佐藤さんに任せました。',
  },
  {
    en: 'I estimate it will take about 2 months in total',
    jp: '見積もると、だいたいトータルで2ヶ月かかります。',
  },
  {
    en: 'This information is linked to customer ID.',
    jp: 'この情報は、お客様IDに紐づいています。',
  },
  {
    en: "It's like this.",
    jp: 'こんな感じです。',
  },
  {
    en: 'Is there anything else you want to talk about besides the topics written here?',
    jp: 'ここに書いてあるトピック以外に何か話したいことありますか。',
  },
  {
    en: "There's a limit to the number of projects we can handle at the same time.",
    jp: '同時に担当できるプロジェクトの数には限界があります。',
  },
  {
    en: "If we don't solve this problem, in the end it'll happen just before the release. ",
    jp: 'これを解決しておかないと、結局、リリース直前に問題が出てくる。',
  },
  {
    en: "I've mostly finished this ticket.",
    jp: 'このチケットはほぼ終わりました。',
  },
  {
    en: 'What was the point of this meeting in the first place?',
    jp: 'そもそも、このミーティングの目的はなんでしたっけ？',
  },
  {
    en: "Let's all share our opinions one after the other. ",
    jp: 'どんどん意見を言ってくださいね。',
  },
  {
    en: 'OK, the QA side will deal with this.',
    jp: 'これはQA側で対応します。',
  },
]

export default dictionary
