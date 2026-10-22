export const locales = ['en', 'ja', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const pages = ['', 'features', 'about', 'support', 'privacy'] as const;
export type Page = (typeof pages)[number];

export const localeNames: Record<Locale, string> = { en: 'EN', ja: '日本語', ko: '한국어' };
export const ogLocale: Record<Locale, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR' };

type Item = { title: string; body: string };

/** The home page phone: one real app capture per key (src/assets/screens/<key>.<locale>.webp). */
export const screens = ['home', 'timer', 'quick-log', 'prbook', 'open'] as const;
export type Screen = (typeof screens)[number];
type Tag = { t: string; g?: 'time' | 'amrap' | 'emom' | 'tabata' | 'rx' | 'pr' };
type Feature = { key: Screen; kicker: string; title: string; body: string; tags: Tag[] };
/** Text on the HTML share-card renders (mirrors the app's card in each language). */
type CardText = Record<
  | 'date' | 'reps' | 'thrusters' | 'pullups' | 'bw' | 'forTime' | 'rxd' | 'prTime'
  | 'min20' | 'roundsOf' | 'pushups' | 'airSquats' | 'roundsReps' | 'scaled'
  | 'lift' | 'oneRm' | 'liftRow' | 'strength' | 'prLift' | 'prev' | 'capTime' | 'capAmrap' | 'capLift',
  string
>;

export interface Dict {
  a11y: { main: string; footer: string; language: string; getInvolved: string; ogAlt: string };
  nav: Record<'features' | 'about' | 'support' | 'privacy', string>;
  cta: { follow: string; beta: string; band: string };
  meta: Record<Page, { title: string; description: string }>;
  hero: { story: string };
  why: { heading: string; lead: string; values: Item[] };
  look: { heading: string; today: string; share: string };
  how: { heading: string; steps: Item[] };
  features: { heading: string; lead: string; what: string; items: Item[] };
  about: { heading: string; story: string; storyBody: string; name: string; nameBody: string; next: string; nextBody: string };
  support: {
    kicker: string; heading: string; intro: string;
    help: Item; bug: Item & { link: string };
    faqHeading: string; faq: { q: string; a: string }[];
  };
  home: {
    kicker: string; title: string; lede: string; join: string; joinNote: string;
    screensLabel: string; shots: string; chips: Record<Screen, string>; alt: Record<Screen, string>;
    features: Feature[];
    share: { kicker: string; title: string; body: string; card: CardText };
  };
}

const en: Dict = {
  a11y: { main: 'Main', footer: 'Footer', language: 'Language', getInvolved: 'Get involved', ogAlt: 'smida: Swedish for to forge. Functional fitness and hybrid race log.' },
  nav: { features: 'Features', about: 'About', support: 'Support', privacy: 'Privacy' },
  cta: { follow: 'Follow @smida_fit', beta: 'Join the beta', band: 'Train with us from day one.' },
  meta: {
    '': { title: 'Smida: a training log for functional fitness', description: 'A training log for functional fitness and hybrid racing: timers, benchmarks, PRs. Built at a box in Tokyo.' },
    features: { title: 'Features · Smida', description: 'What Smida does: any WOD format, strength and 1RM PRs, box timers, PR history, offline on your device, share cards. EN, JA, KO.' },
    about: { title: 'About · Smida', description: 'Smida is a training log built by a member of a box in Tokyo: local-first, no account. Smida is Swedish for to forge.' },
    support: { title: 'Support · Smida', description: 'Smida help: the timers, how PRs count, where your data lives, backups, and how to join the beta.' },
    privacy: { title: 'Privacy · Smida', description: 'What Smida keeps on your phone, the one thing that leaves it, Health Connect, backups, deletion and your rights.' },
  },
  hero: {
    story: 'smida — Swedish for <em>to forge</em>',
  },
  why: {
    heading: 'Why Smida',
    lead: 'Training logs today are built for solo lifters or for gym owners. Smida is built for everyone who trains at a box: log any WOD fast and see your progress. Next, we want you to train <em>together</em> with your box: share results, follow your box, compare on benchmark boards.',
    values: [
      { title: 'Local-first', body: 'Your data stays on your device. It works offline, in the box.' },
      { title: 'No account needed', body: 'Open the app and train. No sign-up, no email.' },
      { title: 'Made by a member', body: 'Built and tested every day by a member of a box in Tokyo.' },
    ],
  },
  look: {
    heading: 'A first look',
    today: 'Today: log any WOD and see your PR at a glance.',
    share: 'A result card, ready for your story.',
  },
  how: {
    heading: 'How it works',
    steps: [
      { title: 'Log it', body: 'Pick the format and enter the WOD in seconds.' },
      { title: 'Time it', body: 'Run the timer: count-in, rounds and rest.' },
      { title: 'See your progress', body: 'Every result lands in your PR history.' },
      { title: 'Share with your box', body: 'Post a result card to your story.' },
    ],
  },
  features: {
    heading: 'Features',
    lead: 'Everything you need to log a session at the box, and nothing in your way.',
    what: 'What you get',
    items: [
      { title: 'Any WOD format', body: 'For Time, AMRAP, EMOM, Tabata and intervals, logged the way the whiteboard reads.' },
      { title: 'Strength and 1RM PRs', body: 'Log sets and loads; your one-rep-max PRs are tracked for you.' },
      { title: 'Benchmarks and race sims', body: 'The classic benchmark WODs, plus hybrid race simulations.' },
      { title: 'Timers built for the box', body: 'Count-in, rounds and rest, readable from across the room.' },
      { title: 'PR history', body: 'Every lift and every benchmark, with your best result on top.' },
      { title: 'Offline, on your device', body: 'No account, no server. Your log works without signal and stays yours.' },
      { title: 'Share result cards', body: 'Turn a result into a card for your story in one tap.' },
      { title: 'Lift goals', body: 'Set a target for a lift and see how close your PR is. A lift you have not tested in 6 months gets a retest note.' },
      { title: 'Body weight', body: 'Log your body weight and follow the trend.' },
      { title: 'Loads as a % of 1RM', body: "Enter a load as a percentage of a 1RM, even another lift's." },
      { title: 'Your data, as files', body: 'Export a backup (settings included) or a CSV for a spreadsheet, and save either straight to your phone.' },
      { title: 'Your call', body: 'Crash reports are a switch in Settings and never include your workouts. Erase all data wipes everything Smida keeps on the phone.' },
      { title: 'Movement icons', body: 'Every movement has an icon, so a long workout is easy to scan.' },
      { title: 'English, 日本語, 한국어', body: 'The app and this site in three languages.' },
    ],
  },
  about: {
    heading: 'Built at a box in Tokyo',
    story: 'The story',
    storyBody: "Smida started as one member's log, kept between WODs at a box in Tokyo. Mostly regular classes, the odd hybrid race, learning it all first-hand: the app is built around those classes, and every feature is used in a real class before it ships.",
    name: 'The name',
    nameBody: "<em>Smida</em> is Swedish for <em>to forge</em>: heat, hammer, repeat. That's training.",
    next: "Where we're going",
    nextBody: 'Next, Smida becomes a place to train together: share your results, follow your box, and see how you stack up on benchmark boards. It starts in Japan, then Korea, then more.',
  },
  support: {
    kicker: 'Help',
    heading: 'Support',
    intro: 'Stuck on something, or found a bug? We read every message.',
    help: { title: 'Get help', body: 'Questions about logging, timers or your PR Book.' },
    bug: { title: 'Report a bug', body: 'Include your phone model, the app version and what you tapped right before.', link: 'Send a bug report' },
    faqHeading: 'Common questions',
    faq: [
      { q: 'Which timers does Smida have?', a: 'For Time (with an optional time cap), AMRAP, EMOM (every minute, or every N:NN such as every 2:30), Tabata and Death By. Each starts with a count-in. When a timer finishes, tap Log Result to open Log Workout with what the timer knows already filled in: your time for For Time, your rounds for AMRAP, the minutes you completed for Death By. EMOM and Tabata open with the score blank for you to enter.' },
      { q: "Why isn't my result counting as a PR?", a: 'A workout PR only comes from a result linked to a benchmark or a saved workout. If you logged it without a link, open the session, tap Edit, choose the workout and save: it then counts toward your PR Book. Team results (Team of 2 or 3) are kept out of your solo PRs. Lift PRs come straight from the sets you log.' },
      { q: 'What do RX+, RX and Scaled mean here?', a: "They're the scale you did the workout at. RX is as prescribed; RX+ is heavier or harder; Scaled is anything adjusted down. PRs are kept separately for each scale." },
      { q: 'Can I edit or delete a session?', a: 'Yes. Open the session from Home or All Activity, then tap Edit to change it, or Delete Session at the bottom to remove it.' },
      { q: 'How do I delete my account or my data?', a: "There is no account. Your data lives only on your phone and is never sent to a server, so deleting the app deletes it. To wipe it and keep the app, use Settings → Erase all data. Backup files you exported are yours: they stay wherever you saved them until you delete them." },
      { q: 'How do I back up or move my data?', a: 'Export a backup file from the app (your settings come with it) and save it wherever you like, for example your own cloud drive. Import that file on your new phone.' },
      { q: 'How do I join the beta?', a: 'Email <a href="mailto:hello@smida.fit?subject=Smida%20beta">hello@smida.fit</a> and tell us whether you use iPhone or Android. The beta starts at our own box.' },
    ],
  },
  home: {
    kicker: 'Built for functional fitness',
    title: 'Forge every rep into a record.',
    lede: 'A training log for functional fitness and hybrid racing. Timers, benchmarks and PRs, all in one place.',
    join: 'Email us to join the beta',
    joinNote: 'iPhone and Android · Tell us which one you use.',
    screensLabel: 'App screens',
    shots: 'Screens from the current build',
    chips: { home: 'Home', timer: 'Timer', 'quick-log': 'Log Workout', prbook: 'PR Book', open: 'Open' },
    alt: {
      home: 'Smida home screen: Log Workout, the weekly goal and streak, the last 12 weeks and latest PRs',
      timer: 'The AMRAP timer running, with the round counter',
      'quick-log': 'Log Workout for Fran: movements, scale and score',
      prbook: 'The PR Book: lifts with their best loads',
      open: 'Open workouts grouped by year, with scores',
    },
    features: [
      {
        key: 'timer', kicker: '01 · Timers', title: 'Five timers. No setup.',
        body: 'For Time, AMRAP, EMOM, Tabata and Death By, with a count-in, round counter and progress ring. Start one from a workout and the result drops straight into your log.',
        tags: [{ t: 'For Time', g: 'time' }, { t: 'AMRAP', g: 'amrap' }, { t: 'EMOM', g: 'emom' }, { t: 'Tabata', g: 'tabata' }, { t: 'Death By' }],
      },
      {
        key: 'quick-log', kicker: '02 · Log Workout', title: 'Log it before the chalk dries.',
        body: 'Score, scale and status in a few taps: RX+, RX or Scaled, with your loads and notes. Link the result to a benchmark and it counts toward your PRs.',
        tags: [{ t: 'RX+' }, { t: 'RX', g: 'rx' }, { t: 'Scaled' }],
      },
      {
        key: 'prbook', kicker: '03 · Benchmarks & PR Book', title: 'Every PR, kept for you.',
        body: 'Lifts, gymnastics, cardio, benchmark WODs and hybrid races in one book. Fran, Cindy, your 1RM back squat: each with its full history and every attempt.',
        tags: [{ t: 'Lift' }, { t: 'Gymnastics' }, { t: 'Cardio' }, { t: 'Benchmark WODs' }, { t: 'PR', g: 'pr' }],
      },
      {
        key: 'open', kicker: '04 · Open workouts', title: 'The Open, ready when you are.',
        body: 'Past Open workouts with their standards and scoring built in. Pick one, log an attempt, and track every retest.',
        tags: [],
      },
    ],
    share: {
      kicker: 'Share cards',
      title: 'Every result, ready to post.',
      body: "Finish a workout and Smida builds the card: the full workout, your score, RX'd and PR. Sized for Stories and the feed.",
      card: {
        date: 'Oct 15', reps: 'reps', thrusters: 'Thrusters', pullups: 'Pull-ups', bw: 'bodyweight', forTime: 'FOR TIME', rxd: "RX'd", prTime: 'PR −14s',
        min20: '20 min', roundsOf: 'rounds of', pushups: 'Push-ups', airSquats: 'Air squats', roundsReps: 'rounds + reps', scaled: 'Scaled',
        lift: 'Back Squat', oneRm: 'one-rep max', liftRow: 'Back squat', strength: 'STRENGTH', prLift: 'PR +5 kg', prev: 'previous 135 kg · Aug 2',
        capTime: 'For Time · PR', capAmrap: 'AMRAP · Scaled', capLift: 'Strength · 1RM',
      },
    },
  },
};

// ja and ko are written as original copy for box members in Japan and Korea, not as translations of en:
// same message and facts per section, native wording and structure (owner feedback 2026-10-16).
const ja: Dict = {
  a11y: { main: 'メインメニュー', footer: 'フッターメニュー', language: '言語', getInvolved: 'ベータに参加', ogAlt: 'Smida。スウェーデン語で「鍛える」という名前の、ボックスでのトレーニングを記録するアプリ。' },
  nav: { features: '機能', about: 'Smidaのこと', support: 'サポート', privacy: 'プライバシー' },
  cta: { follow: 'Instagramでフォロー', beta: 'ベータに参加', band: '最初のベータメンバーになりませんか。' },
  meta: {
    '': { title: 'Smida｜WODと自己ベストを残すトレーニングログ', description: 'クラスのWODも、ハイブリッドレースの練習も、その場でさっと記録。タイマー、ベンチマーク、自己ベストをひとつのアプリにまとめました。東京のボックスで生まれたトレーニングログです。' },
    features: { title: '機能｜Smida', description: 'どんな形式のWODも記録でき、1RMや自己ベストの履歴、ボックスで見やすいタイマー、シェア用の記録カードまで。オフラインで動き、日本語・英語・韓国語で使えます。' },
    about: { title: 'Smidaのこと｜東京のボックス生まれのトレーニングログ', description: '東京のボックスに通うメンバーが、自分の記録のためにつくり始めたアプリです。アカウント登録はなく、データはスマホの中だけ。Smidaはスウェーデン語で「鍛える」。' },
    support: { title: 'サポート｜Smida', description: 'タイマーの種類、自己ベストの仕組み、データの保存先とバックアップ、ベータへの参加方法。困ったときはこちらへ。' },
    privacy: { title: 'プライバシーポリシー｜Smida', description: 'Smidaが端末に保存するもの、外に出るただ一つのもの、ヘルスコネクト、バックアップ、削除、ご本人の権利について。' },
  },
  hero: {
    story: 'smida は、スウェーデン語で「<em>鍛える</em>」',
  },
  why: {
    heading: 'つくった理由',
    lead: '記録アプリといえば、ひとりで黙々と挙げるリフター向けか、ジムを運営する側のためのものばかり。ボックスのクラスで汗を流す人のためのアプリは、意外とありませんでした。Smidaなら、どんなWODもすぐに記録でき、伸びもひと目でわかります。この先は、ボックスの仲間と<em>一緒に</em>使えるアプリへ。記録をシェアしたり、ボックスをフォローしたり、ベンチマークのボードで比べ合ったりできるようにしていきます。',
    values: [
      { title: 'データは手元に', body: 'ログはスマホの中だけに保存。電波の弱いボックスでも、オフラインのまま使えます。' },
      { title: '登録なしで、すぐ', body: 'アプリを開いたら、もう記録できます。会員登録もメールアドレスも要りません。' },
      { title: 'ボックスの会員がつくっています', body: '東京のボックスに通うメンバーが、毎日のクラスで使いながら開発しています。' },
    ],
  },
  look: {
    heading: 'アプリの中身',
    today: 'Today画面。WODをさっと記録して、自己ベストもその場で確認。',
    share: '終わったらストーリーへ。記録カードもアプリの中でつくれます。',
  },
  how: {
    heading: '使い方はシンプル',
    steps: [
      { title: 'WODを入力', body: '形式を選んで、ホワイトボードの内容を数秒で。' },
      { title: 'タイマーを回す', body: 'カウントイン、ラウンド、レストはタイマーにおまかせ。' },
      { title: '伸びを実感', body: '結果はすべて、自己ベストの履歴に積み上がっていきます。' },
      { title: '仲間にシェア', body: '記録カードをストーリーに投稿。' },
    ],
  },
  features: {
    heading: '機能',
    lead: 'ボックスで記録するのに必要なものだけ。じゃまになるものは入れていません。',
    what: '主な機能',
    items: [
      { title: 'WODの形式は問いません', body: 'For Time、AMRAP、EMOM、Tabata、インターバル。ホワイトボードに書かれたままの形で記録できます。' },
      { title: 'ストレングスと1RM', body: 'セットと重量を入れておけば、1RMの自己ベストはアプリが追いかけます。' },
      { title: '定番ベンチマークとレース練習', body: 'おなじみのベンチマークWODに、ハイブリッドレースのシミュレーションも。' },
      { title: 'ボックスで見やすいタイマー', body: 'カウントイン、ラウンド、レスト。離れた場所からでも数字が読めます。' },
      { title: '自己ベストの履歴', body: 'リフトもベンチマークも、いちばん良い記録が一番上に。' },
      { title: 'オフラインで動く', body: 'アカウントもサーバーもなし。電波がなくても使えて、記録は自分の手元に残ります。' },
      { title: '記録カードでシェア', body: 'ワンタップで、結果がストーリー用のカードに。' },
      { title: 'リフトの目標', body: 'リフトごとに目標を決めれば、自己ベストまであとどれくらいかがわかります。6か月測っていないリフトには、再テストの合図が出ます。' },
      { title: '体重の記録', body: '体重を記録して、推移を確認できます。' },
      { title: '1RMの%で重量を', body: '重量は1RMの%で入力できます。別のリフトの1RMを基準にしてもOK。' },
      { title: 'データはファイルで手元に', body: 'バックアップは設定ごと書き出せます。表計算用のCSVも。どちらもスマホに直接保存できます。' },
      { title: '決めるのは自分', body: 'クラッシュレポートの送信は設定でオン・オフでき、ワークアウトの内容は送りません。「すべてのデータを消去」で、Smidaが端末に残したデータを丸ごと消せます。' },
      { title: '種目アイコン', body: '種目ごとにアイコンがあるので、長いメニューもひと目で追えます。' },
      { title: '日本語・English・한국어', body: 'アプリもこのサイトも、3つの言語で使えます。' },
    ],
  },
  about: {
    heading: '東京のボックス生まれ',
    story: 'はじまり',
    storyBody: 'きっかけは、東京のボックスに通うひとりのメンバーが、WODの合間につけていた記録でした。ふだんはクラス中心で、ときどきハイブリッドレースにも出ながら、試行錯誤の毎日。だからSmidaは、クラスで実際に使う場面を前提につくっています。新しい機能も、まず自分のクラスで使ってみてから公開しています。',
    name: '名前の由来',
    nameBody: '<em>smida</em> はスウェーデン語で「<em>鍛える</em>」。熱して、たたいて、また熱する。トレーニングも同じことの繰り返しです。',
    next: 'これから',
    nextBody: '次に目指すのは、仲間と一緒にトレーニングできる場所。記録をシェアしたり、ボックスをフォローしたり、ベンチマークのボードで自分の位置を確かめたり。まずは日本から。その次は韓国、さらにその先へ。',
  },
  support: {
    kicker: 'ヘルプ',
    heading: 'サポート',
    intro: 'うまく動かない、バグを見つけた。そんなときは気軽にメールしてください。届いたメールにはすべて目を通しています。',
    help: { title: '使い方の質問', body: '記録のしかた、タイマー、PRブックのことなど。' },
    bug: { title: 'バグの報告', body: 'スマホの機種、アプリのバージョン、直前に何をタップしたかを添えてもらえると助かります。', link: 'バグを報告する' },
    faqHeading: 'よくある質問',
    faq: [
      { q: 'どんなタイマーがありますか？', a: 'For Time（タイムキャップも設定可）、AMRAP、EMOM（毎分のほか「2:30ごと」のような間隔も）、Tabata、デスバイの5種類です。どれもカウントインから始まります。終わったら「結果を記録」をタップすると、タイマーでわかっている分が入力された状態で「ワークアウトを記録」画面が開きます。For Timeはタイム、AMRAPはラウンド数、デスバイはクリアできた分数。EMOMとTabataはスコアが空欄のまま開くので、自分で入力してください。' },
      { q: '結果が自己ベストにならないのはなぜ？', a: 'WODの自己ベストになるのは、ベンチマークか保存したワークアウトにリンクした結果だけです。リンクせずに記録したときは、セッションを開いて「編集」をタップし、ワークアウトを選んで保存してください。そこからPRブックに反映されます。チーム（2人・3人）での結果は、個人の自己ベストには含まれません。リフトの自己ベストは、記録したセットからそのまま計算されます。' },
      { q: 'RX+・RX・スケールの違いは？', a: 'そのWODをどの強度でやったかを表します。RXは指定どおり、RX+は指定より重い・難しい内容、スケールは重量や動きを調整した場合です。自己ベストはスケールごとに別々に残ります。' },
      { q: 'セッションを編集・削除するには？', a: 'ホームか「すべてのアクティビティ」からセッションを開き、「編集」で修正できます。消したいときは、画面のいちばん下にある「セッションを削除」から。' },
      { q: 'アカウントやデータを削除したい', a: 'Smidaにはアカウントがありません。データはスマホの中にしかなく、どこかのサーバーに送られることもないので、アプリを削除すればデータも一緒に消えます。アプリは残してデータだけ消したいときは、設定の「すべてのデータを消去」から。書き出したバックアップファイルはご自身で保存したものなので、不要になったらそのファイルを削除してください。' },
      { q: 'バックアップや機種変更は？', a: 'アプリからバックアップファイル（設定も含みます）を書き出して、好きな場所（自分のクラウドストレージなど）に保存しておきます。新しいスマホでそのファイルを読み込めば、元どおりです。' },
      { q: 'ベータに参加するには？', a: '<a href="mailto:hello@smida.fit?subject=Smida%20beta">hello@smida.fit</a> に、iPhoneとAndroidのどちらを使っているかを書いて送ってください。ベータは、まず開発者が通うボックスから始めています。' },
    ],
  },
  home: {
    kicker: 'ボックスで汗を流す人へ',
    title: '鍛えた分だけ、<br>記録は積み上がる。',
    lede: 'クラスのWODも、ハイブリッドレースの練習も。タイマー、ベンチマーク、自己ベストをひとつのアプリにまとめました。',
    join: 'メールでベータに申し込む',
    joinNote: 'iPhone / Android · お使いの機種をひと言添えてください',
    screensLabel: 'アプリの画面',
    shots: '開発中ビルドの実際の画面',
    chips: { home: 'ホーム', timer: 'タイマー', 'quick-log': 'ワークアウトを記録', prbook: 'PRブック', open: 'オープン' },
    alt: {
      home: 'Smidaのホーム画面。ワークアウトの記録ボタン、週の目標と連続記録、直近12週、最近の自己ベストが並ぶ',
      timer: 'ラウンド数をカウントしながら進むAMRAPタイマー',
      'quick-log': 'Franのワークアウトを記録する画面。種目、スケール、スコアを入力',
      prbook: 'PRブック。リフトごとのベスト重量の一覧',
      open: '年ごとにまとまったオープンのワークアウトとスコア',
    },
    features: [
      {
        key: 'timer', kicker: '01 · タイマー', title: 'タイマー5種、すぐスタート。',
        body: 'For Time、AMRAP、EMOM、Tabata、デスバイ。カウントイン、ラウンドカウンター、進行リングまでそろっています。ワークアウトから始めれば、終わった瞬間に結果が記録へ。',
        tags: [{ t: 'For Time', g: 'time' }, { t: 'AMRAP', g: 'amrap' }, { t: 'EMOM', g: 'emom' }, { t: 'Tabata', g: 'tabata' }, { t: 'Death By' }],
      },
      {
        key: 'quick-log', kicker: '02 · ワークアウトを記録', title: '息が整う前に、記録完了。',
        body: 'スコア、スケール、ステータスは数タップで。RX+・RX・スケールを選んで、重量やメモも残せます。ベンチマークにリンクすれば、そのまま自己ベストの対象に。',
        tags: [{ t: 'RX+' }, { t: 'RX', g: 'rx' }, { t: 'スケール' }],
      },
      {
        key: 'prbook', kicker: '03 · ベンチマーク＆PRブック', title: '自己ベストは、全部この一冊に。',
        body: 'リフト、ジムナスティクス、カーディオ、ベンチマークWOD、ハイブリッドレース。FranもCindyもバックスクワットの1RMも、挑戦するたびの記録をさかのぼって見られます。',
        tags: [{ t: 'リフト' }, { t: 'ジムナスティクス' }, { t: 'カーディオ' }, { t: 'ベンチマークWOD' }, { t: 'PR', g: 'pr' }],
      },
      {
        key: 'open', kicker: '04 · オープン', title: 'オープンも、好きなときに再挑戦。',
        body: '歴代のオープンのワークアウトを、スタンダードと採点方法ごと収録。選んで記録すれば、リテストのたびに結果を見比べられます。',
        tags: [],
      },
    ],
    share: {
      kicker: 'シェアカード',
      title: '終わったら、そのまま投稿。',
      body: 'ワークアウトが終わると、Smidaがカードを用意します。メニュー、スコア、RX\'d、自己ベストまで1枚に。ストーリーにもフィードにもぴったりのサイズです。',
      // Card text mirrors the app's share card in Japanese.
      card: {
        date: '10月15日', reps: 'レップ', thrusters: 'スラスター', pullups: 'プルアップ', bw: '自重', forTime: 'フォータイム', rxd: "RX'd", prTime: '自己ベスト −14秒',
        min20: '20分', roundsOf: 'ラウンドを繰り返す', pushups: 'プッシュアップ', airSquats: 'エアスクワット', roundsReps: 'ラウンド + レップ', scaled: 'スケール',
        lift: 'バックスクワット', oneRm: '最大挙上重量', liftRow: 'バックスクワット', strength: 'ストレングス', prLift: '自己ベスト +5 kg', prev: '前回 135 kg · 8月2日',
        capTime: 'For Time · 自己ベスト', capAmrap: 'AMRAP · スケール', capLift: 'ストレングス · 1RM',
      },
    },
  },
};

const ko: Dict = {
  a11y: { main: '주 메뉴', footer: '하단 메뉴', language: '언어', getInvolved: '베타 신청', ogAlt: 'Smida. 스웨덴어로 ‘단련하다’라는 이름의, 박스 운동을 기록하는 앱.' },
  nav: { features: '기능', about: '소개', support: '도움말', privacy: '개인정보 처리방침' },
  cta: { follow: '인스타그램 팔로우', beta: '베타 신청', band: '첫 베타 멤버가 되어 주세요.' },
  meta: {
    '': { title: 'Smida | 와드와 PR을 남기는 운동 기록 앱', description: '수업 와드부터 하이브리드 레이스 훈련까지, 운동 끝나고 바로 기록하세요. 타이머, 벤치마크, PR 관리를 앱 하나에 담았습니다. 도쿄의 한 박스에서 태어난 운동 기록 앱입니다.' },
    features: { title: '기능 | Smida', description: '어떤 형식의 와드든 기록하고, 1RM과 PR 히스토리, 박스에서 잘 보이는 타이머, 공유용 기록 카드까지. 인터넷 없이 작동하고 한국어·일본어·영어를 지원합니다.' },
    about: { title: '소개 | Smida', description: '도쿄의 한 박스 회원이 자기 기록을 남기려고 만들기 시작한 앱입니다. 가입 없이 쓰고, 데이터는 휴대폰에만 남습니다. Smida는 스웨덴어로 ‘단련하다’라는 뜻입니다.' },
    support: { title: '도움말 | Smida', description: '타이머 종류, PR이 잡히는 기준, 데이터 저장 위치와 백업, 베타 신청 방법까지. 궁금한 점은 여기서 확인하세요.' },
    privacy: { title: '개인정보 처리방침 | Smida', description: 'Smida가 휴대폰에 저장하는 정보, 밖으로 나가는 단 한 가지, 헬스 커넥트, 백업, 삭제, 정보주체의 권리.' },
  },
  hero: {
    story: 'smida는 스웨덴어로 ‘<em>단련하다</em>’',
  },
  why: {
    heading: '만든 이유',
    lead: '지금까지 운동 기록 앱은 혼자 운동하는 리프터용이거나, 체육관을 운영하는 쪽을 위한 것이 대부분이었습니다. 정작 박스에서 수업을 듣는 회원을 위한 앱은 찾기 어려웠습니다. Smida는 어떤 와드든 금방 기록하고, 얼마나 늘었는지 한눈에 보여 줍니다. 다음 단계는 박스 사람들과 <em>같이</em> 쓰는 앱입니다. 기록을 공유하고, 우리 박스를 팔로우하고, 벤치마크 보드에서 서로 비교해 볼 수 있게 만들어 갈 계획입니다.',
    values: [
      { title: '데이터는 내 폰에', body: '기록은 휴대폰 안에만 저장됩니다. 신호가 약한 박스에서도 오프라인으로 그대로 작동합니다.' },
      { title: '가입 없이 바로', body: '앱을 열면 바로 기록할 수 있습니다. 회원가입도, 이메일도 필요 없습니다.' },
      { title: '박스 회원이 만듭니다', body: '도쿄의 한 박스에 다니는 회원이 매일 수업에서 직접 쓰면서 만듭니다.' },
    ],
  },
  look: {
    heading: '먼저 둘러보기',
    today: 'Today 화면. 와드를 바로 기록하고 PR도 그 자리에서 확인합니다.',
    share: '운동이 끝나면 기록 카드로 스토리에 바로.',
  },
  how: {
    heading: '이렇게 씁니다',
    steps: [
      { title: '와드 입력', body: '형식을 고르고 화이트보드 내용을 몇 초 만에 옮깁니다.' },
      { title: '타이머 켜기', body: '카운트다운, 라운드, 휴식은 타이머가 챙깁니다.' },
      { title: '성장 확인', body: '결과는 모두 PR 히스토리에 차곡차곡 쌓입니다.' },
      { title: '박스 사람들과 공유', body: '기록 카드를 스토리에 올립니다.' },
    ],
  },
  features: {
    heading: '기능',
    lead: '박스에서 기록하는 데 필요한 것만 담았습니다. 방해되는 건 넣지 않았습니다.',
    what: '주요 기능',
    items: [
      { title: '어떤 형식의 와드든', body: 'For Time, AMRAP, EMOM, Tabata, 인터벌. 화이트보드에 적힌 모양 그대로 기록합니다.' },
      { title: '스트렝스와 1RM', body: '세트와 무게만 적으면 1RM PR은 앱이 알아서 챙깁니다.' },
      { title: '벤치마크와 레이스 시뮬레이션', body: '익숙한 벤치마크 와드에, 하이브리드 레이스 시뮬레이션까지.' },
      { title: '박스에서 잘 보이는 타이머', body: '카운트다운, 라운드, 휴식. 멀리서도 숫자가 또렷합니다.' },
      { title: 'PR 히스토리', body: '리프트든 벤치마크든, 최고 기록이 맨 위에 옵니다.' },
      { title: '오프라인에서도 그대로', body: '계정도 서버도 없습니다. 신호가 없어도 작동하고, 기록은 내 손에 남습니다.' },
      { title: '기록 카드 공유', body: '탭 한 번이면 결과가 스토리용 카드가 됩니다.' },
      { title: '리프트 목표', body: '리프트마다 목표를 정하면 PR까지 얼마나 남았는지 보입니다. 6개월 동안 측정하지 않은 리프트에는 재측정 알림이 뜹니다.' },
      { title: '체중 기록', body: '체중을 기록하고 추이를 확인합니다.' },
      { title: '1RM의 %로 무게 입력', body: '무게를 1RM의 %로 입력할 수 있습니다. 다른 리프트의 1RM을 기준으로 해도 됩니다.' },
      { title: '데이터는 파일로', body: '백업은 설정까지 함께 내보내고, 스프레드시트용 CSV도 만들 수 있습니다. 둘 다 휴대폰에 바로 저장됩니다.' },
      { title: '선택은 내가', body: '오류 보고서 전송은 설정에서 켜고 끌 수 있고, 운동 기록은 보내지 않습니다. ‘모든 데이터 삭제’로 Smida가 휴대폰에 남긴 데이터를 한 번에 지울 수 있습니다.' },
      { title: '동작 아이콘', body: '동작마다 아이콘이 있어 긴 와드도 한눈에 읽힙니다.' },
      { title: '한국어·English·日本語', body: '앱도, 이 사이트도 3개 언어로 쓸 수 있습니다.' },
    ],
  },
  about: {
    heading: '도쿄의 한 박스에서 태어났습니다',
    story: 'Smida의 시작',
    storyBody: '시작은 도쿄의 한 박스에 다니는 회원이 와드 사이사이 적던 기록이었습니다. 주로 정규 수업을 듣고 가끔 하이브리드 레이스에 나가며, 하나하나 몸으로 배우는 중입니다. 그래서 Smida는 수업 시간에 실제로 쓰는 장면을 기준으로 만듭니다. 새 기능도 먼저 수업에서 직접 써 본 다음에 내놓습니다.',
    name: '이름에 담은 뜻',
    nameBody: '<em>smida</em>는 스웨덴어로 ‘<em>단련하다</em>’라는 말입니다. 달구고, 두드리고, 다시 달구고. 운동도 결국 그 반복입니다.',
    next: '앞으로',
    nextBody: '다음 목표는 함께 운동하는 공간입니다. 기록을 나누고, 박스를 팔로우하고, 벤치마크 보드에서 내 위치를 확인하는 것. 일본에서 시작해 한국으로, 그리고 그다음으로 넓혀 갑니다.',
  },
  support: {
    kicker: '고객 지원',
    heading: '도움말',
    intro: '막히는 부분이 있거나 버그를 발견했다면 편하게 메일 주세요. 보내 주신 메일은 하나도 빠짐없이 읽습니다.',
    help: { title: '사용 문의', body: '기록하는 법, 타이머, PR 북 등 무엇이든 물어보세요.' },
    bug: { title: '버그 제보', body: '기종, 앱 버전, 문제가 생기기 직전에 누른 버튼을 함께 적어 주시면 큰 도움이 됩니다.', link: '버그 제보하기' },
    faqHeading: '자주 묻는 질문',
    faq: [
      { q: '어떤 타이머가 있나요?', a: 'For Time(타임캡 설정 가능), AMRAP, EMOM(매분, 또는 2:30마다 같은 간격), Tabata, 데스 바이까지 5가지입니다. 모두 카운트다운으로 시작합니다. 타이머가 끝나면 ‘결과 기록’을 누르세요. 타이머가 아는 값이 미리 채워진 채로 ‘운동 기록’ 화면이 열립니다. For Time은 시간, AMRAP은 라운드 수, 데스 바이는 완료한 분 수가 들어갑니다. EMOM과 Tabata는 점수 칸이 비어 있으니 직접 입력하면 됩니다.' },
      { q: '왜 제 기록이 PR로 잡히지 않나요?', a: '와드 PR은 벤치마크나 저장한 운동에 연결된 결과만 인정됩니다. 연결 없이 기록했다면 세션을 열고 ‘편집’을 눌러 운동을 고른 뒤 저장하세요. 그때부터 PR 북에 반영됩니다. 팀(2인·3인) 기록은 개인 PR에 들어가지 않습니다. 리프트 PR은 기록한 세트에서 바로 계산됩니다.' },
      { q: 'RX+, RX, 스케일은 무슨 뜻인가요?', a: '그 와드를 어떤 강도로 했는지를 나타냅니다. RX는 처방 그대로, RX+는 처방보다 무겁거나 어렵게, 스케일은 무게나 동작을 조절한 경우입니다. PR은 스케일별로 따로 남습니다.' },
      { q: '세션을 수정하거나 지우려면요?', a: '홈이나 ‘전체 활동’에서 세션을 열고 ‘편집’을 누르면 수정할 수 있습니다. 지우려면 화면 맨 아래 ‘세션 삭제’를 누르세요.' },
      { q: '계정이나 데이터는 어떻게 삭제하나요?', a: 'Smida에는 계정이 없습니다. 데이터는 휴대폰 안에만 있고 어떤 서버로도 전송되지 않기 때문에, 앱을 삭제하면 데이터도 함께 지워집니다. 앱은 두고 데이터만 지우려면 설정의 ‘모든 데이터 삭제’를 쓰세요. 내보낸 백업 파일은 직접 저장해 둔 파일이니, 필요 없다면 그 파일을 지우면 됩니다.' },
      { q: '백업이나 기기 변경은 어떻게 하나요?', a: '앱에서 백업 파일(설정 포함)을 내보내 원하는 곳(내 클라우드 드라이브 등)에 보관하세요. 새 휴대폰에서 그 파일을 가져오면 그대로 복원됩니다.' },
      { q: '베타는 어떻게 신청하나요?', a: '<a href="mailto:hello@smida.fit?subject=Smida%20beta">hello@smida.fit</a>으로 iPhone과 Android 중 어떤 기기를 쓰는지 적어서 메일 주세요. 베타는 개발자가 다니는 박스에서 먼저 시작합니다.' },
    ],
  },
  home: {
    kicker: '박스에서 운동하는 사람을 위해',
    title: '단련한 만큼, 기록이 쌓인다.',
    lede: '수업 와드부터 하이브리드 레이스 훈련까지. 타이머, 벤치마크, PR을 앱 하나에 담았습니다.',
    join: '메일로 베타 신청하기',
    joinNote: 'iPhone·Android 지원 · 쓰는 기종을 한 줄 적어 주세요',
    screensLabel: '앱 화면',
    shots: '개발 중인 빌드의 실제 화면',
    chips: { home: '홈', timer: '타이머', 'quick-log': '운동 기록', prbook: 'PR 북', open: '오픈' },
    alt: {
      home: 'Smida 홈 화면: 운동 기록 버튼, 주간 목표와 연속 기록, 최근 12주, 최근 PR',
      timer: '라운드 수를 세며 돌아가는 AMRAP 타이머',
      'quick-log': 'Fran 운동 기록 화면: 동작, 스케일, 점수 입력',
      prbook: '리프트별 최고 무게가 정리된 PR 북',
      open: '연도별로 묶인 오픈 와드와 점수',
    },
    features: [
      {
        key: 'timer', kicker: '01 · 타이머', title: '타이머 5종, 누르면 바로 시작.',
        body: 'For Time, AMRAP, EMOM, Tabata, 데스 바이. 카운트다운, 라운드 카운터, 진행 링까지 갖췄습니다. 운동 화면에서 타이머를 켜면 끝나는 순간 결과가 기록에 들어갑니다.',
        tags: [{ t: 'For Time', g: 'time' }, { t: 'AMRAP', g: 'amrap' }, { t: 'EMOM', g: 'emom' }, { t: 'Tabata', g: 'tabata' }, { t: 'Death By' }],
      },
      {
        key: 'quick-log', kicker: '02 · 운동 기록', title: '숨 고르기 전에 기록 끝.',
        body: '점수, 스케일, 완료 여부를 몇 번의 탭으로. RX+, RX, 스케일 중 하나를 고르고 무게와 메모도 남길 수 있습니다. 벤치마크에 연결하면 바로 PR 집계에 들어갑니다.',
        tags: [{ t: 'RX+' }, { t: 'RX', g: 'rx' }, { t: '스케일' }],
      },
      {
        key: 'prbook', kicker: '03 · 벤치마크와 PR 북', title: '내 PR은 전부 이 한 권에.',
        body: '리프트, 짐내스틱, 카디오, 벤치마크 와드, 하이브리드 레이스까지. Fran이든 Cindy든 백 스쿼트 1RM이든, 도전할 때마다 남긴 기록을 처음부터 다시 볼 수 있습니다.',
        tags: [{ t: '리프트' }, { t: '짐내스틱' }, { t: '카디오' }, { t: '벤치마크 와드' }, { t: 'PR', g: 'pr' }],
      },
      {
        key: 'open', kicker: '04 · 오픈', title: '오픈 와드, 언제든 다시 도전.',
        body: '역대 오픈 와드를 동작 기준과 채점 방식까지 그대로 담았습니다. 골라서 기록하면 재도전할 때마다 결과를 나란히 비교할 수 있습니다.',
        tags: [],
      },
    ],
    share: {
      kicker: '공유 카드',
      title: '운동 끝, 바로 업로드.',
      body: "운동을 마치면 Smida가 카드를 만들어 둡니다. 와드 구성, 점수, RX'd, PR까지 한 장에. 스토리에도 피드에도 맞는 크기입니다.",
      // Card text mirrors the app's share card in Korean.
      card: {
        date: '10월 15일', reps: '회', thrusters: '스러스터', pullups: '풀업', bw: '맨몸', forTime: '포 타임', rxd: "RX'd", prTime: 'PR −14초',
        min20: '20분', roundsOf: '라운드 반복', pushups: '푸시업', airSquats: '에어 스쿼트', roundsReps: '라운드 + 렙', scaled: '스케일',
        lift: '백 스쿼트', oneRm: '1회 최대 중량', liftRow: '백 스쿼트', strength: '스트렝스', prLift: 'PR +5 kg', prev: '이전 135 kg · 8월 2일',
        capTime: 'For Time · PR', capAmrap: 'AMRAP · 스케일', capLift: '스트렝스 · 1RM',
      },
    },
  },
};

export const ui: Record<Locale, Dict> = { en, ja, ko };
