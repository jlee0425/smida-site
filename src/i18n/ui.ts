export const locales = ['en', 'ja', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const pages = ['', 'features', 'about', 'support'] as const;
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
  nav: Record<'features' | 'about' | 'support', string>;
  cta: { follow: string; beta: string; band: string };
  meta: Record<Page, { title: string; description: string }>;
  hero: { story: string };
  why: { heading: string; lead: string; values: Item[] };
  look: { heading: string; today: string; share: string };
  how: { heading: string; steps: Item[] };
  features: { heading: string; lead: string; what: string; items: Item[] };
  about: { heading: string; story: string; storyBody: string; name: string; nameBody: string; next: string; nextBody: string };
  support: { heading: string; faq: { q: string; a: string }[]; contact: string };
  home: {
    kicker: string; title: string; lede: string; join: string; joinNote: string;
    screensLabel: string; shots: string; chips: Record<Screen, string>; alt: Record<Screen, string>;
    features: Feature[];
    share: { kicker: string; title: string; body: string; card: CardText };
  };
}

const en: Dict = {
  a11y: { main: 'Main', footer: 'Footer', language: 'Language', getInvolved: 'Get involved', ogAlt: 'smida: Swedish for to forge. Functional fitness and hybrid race log.' },
  nav: { features: 'Features', about: 'About', support: 'Support' },
  cta: { follow: 'Follow @smida_fit', beta: 'Join the beta', band: 'Train with us from day one.' },
  meta: {
    '': { title: 'Smida: a training log for functional fitness', description: 'A training log for functional fitness and hybrid racing: timers, benchmarks, PRs. Built at a box in Tokyo.' },
    features: { title: 'Features · Smida', description: 'What Smida does: any WOD format, strength and 1RM PRs, box timers, PR history, offline on your device, share cards. EN, JA, KO.' },
    about: { title: 'About · Smida', description: 'Smida is a training log built by a member of a box in Tokyo: local-first, no account. Smida is Swedish for to forge.' },
    support: { title: 'Support · Smida', description: 'Smida support: how to join the beta, where your data lives, and how to back it up.' },
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
    heading: 'Support',
    faq: [
      { q: 'What is Smida?', a: "A training log for functional fitness and hybrid racing: timers, benchmarks and PRs. It's built and tested every day at a box in Tokyo." },
      { q: 'How do I join the beta?', a: 'Email <a href="mailto:hello@smida.fit?subject=Smida%20beta">hello@smida.fit</a> and tell us whether you use iPhone or Android. The beta starts with our box.' },
      { q: 'Where is my data?', a: 'On your device. Smida has no account and no server, so the developer never sees your training data.' },
      { q: 'How do I back up or move my data?', a: 'Export a backup file from the app and save it wherever you like, for example your own cloud drive. Import that file on your new phone.' },
    ],
    contact: 'Contact',
  },
  home: {
    kicker: 'Built for functional fitness',
    title: 'Forge every rep into a record.',
    lede: 'A training log for functional fitness and hybrid racing. Timers, benchmarks and PRs, all in one place.',
    join: 'Email us to join the beta',
    joinNote: 'iPhone and Android · Tell us which one you use.',
    screensLabel: 'App screens',
    shots: 'Screens from the current build',
    chips: { home: 'Home', timer: 'Timer', 'quick-log': 'Quick Log', prbook: 'PR Book', open: 'Open' },
    alt: {
      home: 'Smida home screen: Log Workout, recent PRs and recent activity',
      timer: 'The AMRAP timer running, with the round counter',
      'quick-log': 'Quick Log for Fran: movements, scale and score',
      prbook: 'The PR Book: lifts with their best loads',
      open: 'Open workouts grouped by year, with scores',
    },
    features: [
      {
        key: 'timer', kicker: '01 · Timers', title: 'Four timers. No setup.',
        body: 'For Time, AMRAP, EMOM and Tabata with a count-in, round counter and progress ring. Start one from a workout and the result drops straight into your log.',
        tags: [{ t: 'For Time', g: 'time' }, { t: 'AMRAP', g: 'amrap' }, { t: 'EMOM', g: 'emom' }, { t: 'Tabata', g: 'tabata' }],
      },
      {
        key: 'quick-log', kicker: '02 · Quick Log', title: 'Log it before the chalk dries.',
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

const ja: Dict = {
  a11y: { main: 'メイン', footer: 'フッター', language: '言語', getInvolved: '参加する', ogAlt: 'smida：スウェーデン語で「鍛える」。ファンクショナルフィットネスとハイブリッドレースのトレーニング記録アプリ。' },
  nav: { features: '機能', about: 'Smidaについて', support: 'サポート' },
  cta: { follow: '@smida_fit をフォロー', beta: 'ベータ版に参加する', band: '最初の一日から、一緒にトレーニングしませんか。' },
  meta: {
    '': { title: 'Smida｜ファンクショナルフィットネスのトレーニング記録アプリ', description: 'ファンクショナルフィットネスとハイブリッドレースのためのトレーニング記録アプリ。タイマーも、ベンチマークも、自己ベストも。東京のボックス発です。' },
    features: { title: '機能｜Smida', description: 'Smida の機能：あらゆるWOD形式、ストレングスと1RMの自己ベスト、ボックス仕様のタイマー、自己ベストの履歴、端末内でのオフライン動作、記録カードのシェア。日本語・英語・韓国語に対応。' },
    about: { title: 'Smidaについて｜Smida', description: 'Smida は、東京のボックスに通うメンバーがつくっているトレーニング記録アプリです。ローカルファーストで、アカウントは不要。名前はスウェーデン語で「鍛える」という意味です。' },
    support: { title: 'サポート｜Smida', description: 'ベータ版への参加方法、データの保存場所、バックアップの方法をご案内します。' },
  },
  hero: {
    story: 'smida — スウェーデン語で「<em>鍛える</em>」',
  },
  why: {
    heading: 'Smida が目指すもの',
    lead: 'これまでのトレーニング記録アプリは、ひとりで黙々と挙げるリフター向けか、ジム運営者向けのものがほとんどでした。Smida は、ボックスで練習するすべての人のためのアプリです。どんなWODもさっと記録して、成長を確かめられます。次は、ボックスの仲間と<em>一緒に</em>トレーニングできるように。記録をシェアしたり、ボックスをフォローしたり、ベンチマークボードで比べ合ったりできるようにしていきます。',
    values: [
      { title: 'ローカルファースト', body: 'データはあなたの端末の中に。オフラインでも使えるので、ボックスでも安心です。' },
      { title: 'アカウント不要', body: 'アプリを開けば、すぐにトレーニング。会員登録もメールアドレスも要りません。' },
      { title: 'ボックスのメンバーがつくる', body: '東京のボックスに通うメンバーが、毎日つくって毎日試しています。' },
    ],
  },
  look: {
    heading: 'アプリをのぞいてみる',
    today: 'Today：どんなWODもすぐに記録して、自己ベストもひと目でチェック。',
    share: 'そのままストーリーに載せられる記録カード。',
  },
  how: {
    heading: '使い方',
    steps: [
      { title: '記録する', body: '形式を選んで、WODを数秒で入力。' },
      { title: '時間を計る', body: 'タイマーをスタート。カウントダウン、ラウンド、レストまでおまかせ。' },
      { title: '成長を確かめる', body: 'すべての記録が自己ベストの履歴に残ります。' },
      { title: '仲間とシェアする', body: '記録カードをストーリーに投稿できます。' },
    ],
  },
  features: {
    heading: '機能',
    lead: 'ボックスでのトレーニング記録に必要なものは、すべてそろっています。余計なものはありません。',
    what: 'できること',
    items: [
      { title: 'あらゆるWOD形式', body: 'For Time、AMRAP、EMOM、Tabata、インターバル。ホワイトボードに書かれたとおりに記録できます。' },
      { title: 'ストレングスと1RMの自己ベスト', body: 'セットと重量を記録するだけで、1RMの自己ベストは自動で更新されます。' },
      { title: 'ベンチマークとレースシミュレーション', body: 'おなじみのベンチマークWODに加えて、ハイブリッドレースのシミュレーションも。' },
      { title: 'ボックス仕様のタイマー', body: 'カウントダウン、ラウンド、レスト。離れた場所からでも見やすい表示です。' },
      { title: '自己ベストの履歴', body: 'すべてのリフトとベンチマークを、ベスト記録を先頭に一覧できます。' },
      { title: 'オフラインで、端末の中に', body: 'アカウントもサーバーもありません。電波がなくても使えて、記録はずっとあなたのものです。' },
      { title: '記録カードをシェア', body: 'ワンタップで、記録をストーリー用のカードに。' },
      { title: '英語・日本語・韓国語', body: 'アプリもこのサイトも、3つの言語に対応しています。' },
    ],
  },
  about: {
    heading: '東京のボックスでつくっています',
    story: 'はじまり',
    storyBody: 'Smida は、東京のボックスに通うひとりのメンバーが、WODの合間につけていた記録から始まりました。ふだんはクラスに参加し、ときどきハイブリッドレースにも出ながら、身をもって学んでいるところ。アプリも、自分が受けているクラスに合わせてつくっています。どの機能も、実際のクラスで使ってからリリースしています。',
    name: '名前の由来',
    nameBody: '<em>smida</em> はスウェーデン語で「<em>鍛える</em>」という意味。熱して、打って、また繰り返す。トレーニングも同じです。',
    next: 'これから',
    nextBody: '次のステップとして、Smida は仲間と一緒にトレーニングできる場所になります。記録をシェアしたり、ボックスをフォローしたり、ベンチマークボードで自分の位置を確かめたり。まずは日本、次に韓国、そしてその先へ。',
  },
  support: {
    heading: 'サポート',
    faq: [
      { q: 'Smida とは何ですか？', a: 'ファンクショナルフィットネスとハイブリッドレースのためのトレーニング記録アプリです。タイマー、ベンチマーク、自己ベストの記録ができます。東京のボックスで、毎日開発・テストしています。' },
      { q: 'ベータ版に参加するには？', a: '<a href="mailto:hello@smida.fit?subject=Smida%20beta">hello@smida.fit</a> まで、お使いの端末が iPhone か Android かを書いてメールしてください。ベータ版は、私たちのボックスから始まります。' },
      { q: 'データはどこに保存されますか？', a: 'お使いの端末の中です。アカウントもサーバーもないため、開発者があなたのトレーニングデータを見ることはありません。' },
      { q: 'バックアップや機種変更の方法は？', a: 'アプリからバックアップファイルを書き出し、お好きな場所（ご自身のクラウドドライブなど）に保存してください。新しい端末でそのファイルを読み込めば復元できます。' },
    ],
    contact: 'お問い合わせ',
  },
  home: {
    kicker: 'ファンクショナルフィットネスに打ち込む人へ',
    title: 'レップを重ねて、記録を鍛える。',
    lede: 'ファンクショナルフィットネスとハイブリッドレースのためのトレーニング記録アプリです。タイマーも、ベンチマークも、自己ベストも、ひとつのアプリで。',
    join: 'メールでベータ版に参加する',
    joinNote: 'iPhone・Android 対応 · お使いの端末を書いてお送りください。',
    screensLabel: 'アプリの画面',
    shots: '最新ビルドの実際の画面です',
    chips: { home: 'ホーム', timer: 'タイマー', 'quick-log': 'クイックログ', prbook: 'PRブック', open: 'オープン' },
    alt: {
      home: 'Smida のホーム画面：ワークアウトの記録、最近の自己ベスト、最近のアクティビティ',
      timer: 'AMRAP タイマーの実行中画面とラウンドカウンター',
      'quick-log': 'Fran のクイックログ：種目、スケール、スコア',
      prbook: 'PRブック：リフトごとのベスト重量',
      open: '年ごとに並んだオープンのワークアウトとスコア',
    },
    features: [
      {
        key: 'timer', kicker: '01 · タイマー', title: 'タイマーは4種類。設定いらず。',
        body: 'For Time、AMRAP、EMOM、Tabata。カウントダウン、ラウンドカウンター、進行リング付きです。ワークアウトからタイマーを始めれば、結果はそのまま記録に残ります。',
        tags: [{ t: 'For Time', g: 'time' }, { t: 'AMRAP', g: 'amrap' }, { t: 'EMOM', g: 'emom' }, { t: 'Tabata', g: 'tabata' }],
      },
      {
        key: 'quick-log', kicker: '02 · クイックログ', title: 'チョークが乾く前に、記録完了。',
        body: 'スコア、スケール、ステータスを数タップで。RX+・RX・スケールを選んで、重量やメモも残せます。ベンチマークにひも付ければ、自己ベストにも反映されます。',
        tags: [{ t: 'RX+' }, { t: 'RX', g: 'rx' }, { t: 'スケール' }],
      },
      {
        key: 'prbook', kicker: '03 · ベンチマークとPRブック', title: '自己ベストは、すべてここに。',
        body: 'リフト、ジムナスティクス、カーディオ、ベンチマークWOD、ハイブリッドレースを1冊に。Fran も Cindy も 1RM のバックスクワットも、これまでの挑戦をすべて履歴で振り返れます。',
        tags: [{ t: 'リフト' }, { t: 'ジムナスティクス' }, { t: 'カーディオ' }, { t: 'ベンチマークWOD' }, { t: 'PR', g: 'pr' }],
      },
      {
        key: 'open', kicker: '04 · オープン', title: 'オープンのワークアウトを、好きなときに。',
        body: '過去のオープンのワークアウトを、スタンダードとスコアリング込みで収録しています。選んで記録するだけで、再挑戦の結果もすべて追いかけられます。',
        tags: [],
      },
    ],
    share: {
      kicker: 'シェアカード',
      title: 'どの記録も、そのまま投稿できます。',
      body: 'ワークアウトを終えると、Smida がカードをつくります。ワークアウトの内容、スコア、RX\'d、自己ベストまで。ストーリーにもフィードにも合うサイズです。',
      card: {
        date: '10月15日', reps: 'レップ', thrusters: 'スラスター', pullups: 'プルアップ', bw: '自重', forTime: 'フォータイム', rxd: "RX'd", prTime: '自己ベスト −14秒',
        min20: '20分', roundsOf: 'ラウンドを繰り返す', pushups: 'プッシュアップ', airSquats: 'エアスクワット', roundsReps: 'ラウンド + レップ', scaled: 'スケール',
        lift: 'バックスクワット', oneRm: '最大挙上重量', liftRow: 'バックスクワット', strength: 'ストレングス', prLift: '自己ベスト +5 kg', prev: '前回 135 kg · 8月2日',
        capTime: 'フォータイム · 自己ベスト', capAmrap: 'AMRAP · スケール', capLift: 'ストレングス · 1RM',
      },
    },
  },
};

const ko: Dict = {
  a11y: { main: '메인', footer: '푸터', language: '언어', getInvolved: '참여하기', ogAlt: 'smida: 스웨덴어로 ‘단련하다’. 기능성 피트니스와 하이브리드 레이스를 위한 운동 기록 앱.' },
  nav: { features: '기능', about: '소개', support: '고객 지원' },
  cta: { follow: '@smida_fit 팔로우', beta: '베타 참여하기', band: '첫날부터 함께하세요.' },
  meta: {
    '': { title: 'Smida | 기능성 피트니스 운동 기록 앱', description: '기능성 피트니스와 하이브리드 레이스를 위한 운동 기록 앱. 타이머, 벤치마크, 개인 최고 기록(PR)까지 한곳에서. 도쿄의 한 박스에서 시작됐습니다.' },
    features: { title: '기능 | Smida', description: 'Smida의 기능: 모든 WOD 형식, 스트렝스와 1RM PR, 박스에 맞춘 타이머, PR 히스토리, 기기 안에서 오프라인 작동, 기록 카드 공유. 한국어·일본어·영어 지원.' },
    about: { title: '소개 | Smida', description: 'Smida는 도쿄의 한 박스에 다니는 회원이 만드는 운동 기록 앱입니다. 로컬 우선, 계정 없이 사용합니다. 이름은 스웨덴어로 ‘단련하다’라는 뜻입니다.' },
    support: { title: '고객 지원 | Smida', description: '베타 참여 방법, 데이터 저장 위치, 백업 방법을 안내합니다.' },
  },
  hero: {
    story: 'smida — 스웨덴어로 ‘<em>단련하다</em>’',
  },
  why: {
    heading: 'Smida를 만든 이유',
    lead: '지금까지의 운동 기록 앱은 혼자 운동하는 리프터나 체육관 운영자를 위한 것이 대부분이었습니다. Smida는 박스에서 운동하는 모든 회원을 위한 앱입니다. 어떤 WOD든 빠르게 기록하고 성장을 확인하세요. 다음 목표는 박스 사람들과 <em>함께</em> 운동하는 것입니다. 기록을 공유하고, 내 박스를 팔로우하고, 벤치마크 보드에서 서로 비교할 수 있도록 준비하고 있습니다.',
    values: [
      { title: '로컬 우선', body: '데이터는 내 기기에 저장됩니다. 오프라인에서도, 박스에서도 문제없이 작동합니다.' },
      { title: '계정 없이 바로', body: '앱을 열면 바로 운동을 시작할 수 있습니다. 가입도, 이메일도 필요 없습니다.' },
      { title: '박스 회원이 만듭니다', body: '도쿄의 한 박스에 다니는 회원이 매일 만들고, 매일 테스트합니다.' },
    ],
  },
  look: {
    heading: '미리 보기',
    today: 'Today: 어떤 WOD든 바로 기록하고 PR도 한눈에 확인하세요.',
    share: '스토리에 바로 올릴 수 있는 기록 카드.',
  },
  how: {
    heading: '사용 방법',
    steps: [
      { title: '기록하기', body: '형식을 고르고 WOD를 몇 초 만에 입력하세요.' },
      { title: '시간 재기', body: '타이머를 시작하세요. 카운트다운, 라운드, 휴식까지 알아서 챙겨 줍니다.' },
      { title: '성장 확인하기', body: '모든 기록이 PR 히스토리에 쌓입니다.' },
      { title: '박스 사람들과 공유하기', body: '기록 카드를 스토리에 올려 보세요.' },
    ],
  },
  features: {
    heading: '기능',
    lead: '박스에서 운동을 기록하는 데 필요한 것은 모두 담고, 불필요한 것은 덜어냈습니다.',
    what: '주요 기능',
    items: [
      { title: '모든 WOD 형식', body: 'For Time, AMRAP, EMOM, Tabata, 인터벌까지. 화이트보드에 적힌 그대로 기록하세요.' },
      { title: '스트렝스와 1RM PR', body: '세트와 무게만 기록하면 1RM PR은 자동으로 관리됩니다.' },
      { title: '벤치마크와 레이스 시뮬레이션', body: '잘 알려진 벤치마크 WOD에 하이브리드 레이스 시뮬레이션까지.' },
      { title: '박스에 맞춘 타이머', body: '카운트다운, 라운드, 휴식. 멀리서도 한눈에 보입니다.' },
      { title: 'PR 히스토리', body: '모든 리프트와 벤치마크의 기록을 최고 기록이 맨 위에 오도록 보여 줍니다.' },
      { title: '오프라인으로, 내 기기에', body: '계정도 서버도 없습니다. 인터넷이 안 돼도 작동하고, 기록은 온전히 내 것입니다.' },
      { title: '기록 카드 공유', body: '한 번만 탭하면 기록이 스토리용 카드가 됩니다.' },
      { title: '영어·일본어·한국어', body: '앱과 이 사이트 모두 3개 언어를 지원합니다.' },
    ],
  },
  about: {
    heading: '도쿄의 한 박스에서 시작됐습니다',
    story: 'Smida 이야기',
    storyBody: 'Smida는 도쿄의 한 박스에 다니는 회원이 WOD 사이사이 남기던 기록에서 시작됐습니다. 평소에는 주로 수업에 참여하고 가끔 하이브리드 레이스에도 나가면서, 직접 부딪치며 배워 가는 중입니다. 그래서 앱도 그 수업을 중심으로 만들고 있습니다. 모든 기능은 실제 수업에서 먼저 써 본 뒤에 내놓습니다.',
    name: '이름의 뜻',
    nameBody: '<em>smida</em>는 스웨덴어로 ‘<em>단련하다</em>’라는 뜻입니다. 달구고, 두드리고, 다시 반복하는 것. 훈련도 마찬가지입니다.',
    next: '앞으로의 계획',
    nextBody: '다음으로 Smida는 함께 운동하는 공간이 될 준비를 하고 있습니다. 기록을 공유하고, 내 박스를 팔로우하고, 벤치마크 보드에서 내 위치를 확인할 수 있게 됩니다. 일본을 시작으로 한국, 그리고 더 많은 곳으로 넓혀 갈 예정입니다.',
  },
  support: {
    heading: '고객 지원',
    faq: [
      { q: 'Smida는 어떤 앱인가요?', a: '기능성 피트니스와 하이브리드 레이스를 위한 운동 기록 앱입니다. 타이머와 벤치마크, 개인 최고 기록(PR) 관리를 지원합니다. 도쿄의 한 박스에서 매일 개발하고 테스트하고 있습니다.' },
      { q: '베타에 참여하려면 어떻게 하나요?', a: '<a href="mailto:hello@smida.fit?subject=Smida%20beta">hello@smida.fit</a>으로 사용 중인 기기(iPhone 또는 Android)를 적어 메일을 보내 주세요. 베타는 우리 박스에서 먼저 시작합니다.' },
      { q: '내 데이터는 어디에 저장되나요?', a: '사용 중인 기기 안에 저장됩니다. Smida에는 계정도 서버도 없기 때문에 개발자가 여러분의 운동 데이터를 볼 수 없습니다.' },
      { q: '데이터를 백업하거나 옮기려면 어떻게 하나요?', a: '앱에서 백업 파일을 내보내 원하는 곳(예: 본인의 클라우드 드라이브)에 저장하세요. 새 휴대폰에서 그 파일을 불러오면 복원됩니다.' },
    ],
    contact: '문의',
  },
  home: {
    kicker: '기능성 피트니스로 운동하는 사람들을 위해',
    title: '한 렙 한 렙, 기록으로 단련합니다.',
    lede: '기능성 피트니스와 하이브리드 레이스를 위한 운동 기록 앱입니다. 타이머, 벤치마크, 개인 최고 기록(PR)까지 한곳에서 관리하세요.',
    join: '메일로 베타 신청하기',
    joinNote: 'iPhone·Android 지원 · 사용 중인 기기를 적어 보내 주세요.',
    screensLabel: '앱 화면',
    shots: '현재 빌드의 실제 화면입니다',
    chips: { home: '홈', timer: '타이머', 'quick-log': '퀵 로그', prbook: 'PR 북', open: '오픈' },
    alt: {
      home: 'Smida 홈 화면: 운동 기록 버튼, 최근 PR, 최근 활동',
      timer: '라운드 카운터가 있는 AMRAP 타이머 실행 화면',
      'quick-log': 'Fran 퀵 로그: 동작, 스케일, 점수',
      prbook: 'PR 북: 리프트별 최고 무게',
      open: '연도별로 정리된 오픈 운동과 점수',
    },
    features: [
      {
        key: 'timer', kicker: '01 · 타이머', title: '타이머 4종, 설정은 필요 없습니다.',
        body: 'For Time, AMRAP, EMOM, Tabata를 카운트다운, 라운드 카운터, 진행 링과 함께 제공합니다. 운동에서 타이머를 시작하면 결과가 바로 기록에 남습니다.',
        tags: [{ t: 'For Time', g: 'time' }, { t: 'AMRAP', g: 'amrap' }, { t: 'EMOM', g: 'emom' }, { t: 'Tabata', g: 'tabata' }],
      },
      {
        key: 'quick-log', kicker: '02 · 퀵 로그', title: '초크가 마르기 전에 기록을 끝냅니다.',
        body: '점수, 스케일, 상태를 몇 번의 탭으로 입력합니다. RX+, RX, 스케일 중에서 고르고 무게와 메모도 남길 수 있습니다. 벤치마크에 연결하면 PR에도 반영됩니다.',
        tags: [{ t: 'RX+' }, { t: 'RX', g: 'rx' }, { t: '스케일' }],
      },
      {
        key: 'prbook', kicker: '03 · 벤치마크와 PR 북', title: '모든 PR을 빠짐없이 남겨 둡니다.',
        body: '리프트, 짐내스틱, 카디오, 벤치마크 WOD, 하이브리드 레이스를 한 권에 담았습니다. Fran, Cindy, 1RM 백 스쿼트까지 모든 시도를 전체 기록과 함께 확인할 수 있습니다.',
        tags: [{ t: '리프트' }, { t: '짐내스틱' }, { t: '카디오' }, { t: '벤치마크 WOD' }, { t: 'PR', g: 'pr' }],
      },
      {
        key: 'open', kicker: '04 · 오픈', title: '오픈 운동, 원할 때 언제든 도전하세요.',
        body: '지난 오픈 운동을 기준과 채점 방식까지 담아 두었습니다. 하나를 골라 기록하고, 재도전할 때마다 결과를 비교해 보세요.',
        tags: [],
      },
    ],
    share: {
      kicker: '공유 카드',
      title: '모든 기록을 바로 올릴 수 있습니다.',
      body: "운동을 마치면 Smida가 카드를 만들어 줍니다. 운동 내용, 점수, RX'd, PR까지 담았습니다. 스토리와 피드에 맞는 크기입니다.",
      card: {
        date: '10월 15일', reps: '회', thrusters: '스러스터', pullups: '풀업', bw: '맨몸', forTime: '포 타임', rxd: "RX'd", prTime: 'PR −14초',
        min20: '20분', roundsOf: '라운드 반복', pushups: '푸시업', airSquats: '에어 스쿼트', roundsReps: '라운드 + 렙', scaled: '스케일',
        lift: '백 스쿼트', oneRm: '1회 최대 중량', liftRow: '백 스쿼트', strength: '스트렝스', prLift: 'PR +5 kg', prev: '이전 135 kg · 8월 2일',
        capTime: '포 타임 · PR', capAmrap: 'AMRAP · 스케일', capLift: '스트렝스 · 1RM',
      },
    },
  },
};

export const ui: Record<Locale, Dict> = { en, ja, ko };
