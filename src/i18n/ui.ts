export const locales = ['en', 'ja', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const pages = ['', 'features', 'about', 'support'] as const;
export type Page = (typeof pages)[number];

export const localeNames: Record<Locale, string> = { en: 'EN', ja: '日本語', ko: '한국어' };
export const ogLocale: Record<Locale, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR' };

type Item = { title: string; body: string };
type Milestone = { when: string; datetime: string; text: string; done?: boolean };

export interface Dict {
  a11y: { main: string; footer: string; language: string; done: string; getInvolved: string; ogAlt: string };
  nav: Record<'features' | 'about' | 'support', string>;
  cta: { follow: string; beta: string; band: string };
  meta: Record<Page, { title: string; description: string }>;
  hero: { story: string; pitch: string };
  why: { heading: string; lead: string; values: Item[] };
  look: { heading: string; today: string; timer: string; prs: string; share: string };
  how: { heading: string; steps: Item[] };
  milestones: { heading: string; items: Milestone[] };
  features: { heading: string; lead: string; what: string; items: Item[] };
  about: { heading: string; story: string; storyBody: string; name: string; nameBody: string; next: string; nextBody: string };
  support: { heading: string; faq: { q: string; a: string }[]; contact: string };
}

const en: Dict = {
  a11y: { main: 'Main', footer: 'Footer', language: 'Language', done: 'done', getInvolved: 'Get involved', ogAlt: 'smida: Swedish for to forge. Functional fitness and hybrid race log.' },
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
    pitch: 'A training log for functional fitness and hybrid racing: timers, benchmarks, PRs. Built at a box in Tokyo.',
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
    timer: 'Timers built for the box: count-in, rounds, rest.',
    prs: 'Your PR history, every lift and every benchmark.',
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
  milestones: {
    heading: 'Milestones',
    items: [
      { when: 'Oct 2026', datetime: '2026-10', text: 'Built and tested every day at a Tokyo box', done: true },
      { when: 'Late 2026', datetime: '2026', text: 'The Smida beta with our box (iPhone &amp; Android)' },
      { when: 'Early 2027', datetime: '2027', text: 'Launch in Japan' },
      { when: '2027', datetime: '2027', text: 'Train together: share results, follow your box' },
      { when: '2027', datetime: '2027', text: 'Korea, then more' },
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
    nextBody: 'In 2027, Smida becomes a place to train together: share your results, follow your box, and see how you stack up on benchmark boards. It starts in Japan, then Korea, then more.',
  },
  support: {
    heading: 'Support',
    faq: [
      { q: 'What is Smida?', a: "A training log for functional fitness and hybrid racing: timers, benchmarks and PRs. It's built and tested every day at a box in Tokyo." },
      { q: 'How do I join the beta?', a: 'Email <a href="mailto:hello@smida.fit?subject=Smida%20beta">hello@smida.fit</a> and tell us whether you use iPhone or Android. The beta starts with our box in late 2026.' },
      { q: 'Where is my data?', a: 'On your device. Smida has no account and no server, so the developer never sees your training data.' },
      { q: 'How do I back up or move my data?', a: 'Export a backup file from the app and save it wherever you like, for example your own cloud drive. Import that file on your new phone.' },
    ],
    contact: 'Contact',
  },
};

const ja: Dict = {
  a11y: { main: 'メイン', footer: 'フッター', language: '言語', done: '完了', getInvolved: '参加する', ogAlt: 'smida：スウェーデン語で「鍛える」。ファンクショナルフィットネスとハイブリッドレースのトレーニング記録アプリ。' },
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
    pitch: 'ファンクショナルフィットネスとハイブリッドレースのためのトレーニング記録アプリ。タイマーも、ベンチマークも、自己ベストも。東京のボックス発です。',
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
    timer: 'ボックス仕様のタイマー：カウントダウン、ラウンド、レスト。',
    prs: 'リフトもベンチマークも、自己ベストの履歴がすべてここに。',
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
  milestones: {
    heading: 'ロードマップ',
    items: [
      { when: '2026年10月', datetime: '2026-10', text: '東京のボックスで毎日開発・テスト中', done: true },
      { when: '2026年後半', datetime: '2026', text: '私たちのボックスで Smida ベータ版を開始（iPhone・Android）' },
      { when: '2027年前半', datetime: '2027', text: '日本でリリース' },
      { when: '2027年', datetime: '2027', text: '一緒にトレーニング：記録をシェアし、ボックスをフォロー' },
      { when: '2027年', datetime: '2027', text: '韓国、そしてその先へ' },
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
    nextBody: '2027年、Smida は仲間と一緒にトレーニングできる場所になります。記録をシェアしたり、ボックスをフォローしたり、ベンチマークボードで自分の位置を確かめたり。まずは日本、次に韓国、そしてその先へ。',
  },
  support: {
    heading: 'サポート',
    faq: [
      { q: 'Smida とは何ですか？', a: 'ファンクショナルフィットネスとハイブリッドレースのためのトレーニング記録アプリです。タイマー、ベンチマーク、自己ベストの記録ができます。東京のボックスで、毎日開発・テストしています。' },
      { q: 'ベータ版に参加するには？', a: '<a href="mailto:hello@smida.fit?subject=Smida%20beta">hello@smida.fit</a> まで、お使いの端末が iPhone か Android かを書いてメールしてください。ベータ版は 2026 年後半、私たちのボックスから始まります。' },
      { q: 'データはどこに保存されますか？', a: 'お使いの端末の中です。アカウントもサーバーもないため、開発者があなたのトレーニングデータを見ることはありません。' },
      { q: 'バックアップや機種変更の方法は？', a: 'アプリからバックアップファイルを書き出し、お好きな場所（ご自身のクラウドドライブなど）に保存してください。新しい端末でそのファイルを読み込めば復元できます。' },
    ],
    contact: 'お問い合わせ',
  },
};

const ko: Dict = {
  a11y: { main: '메인', footer: '푸터', language: '언어', done: '완료', getInvolved: '참여하기', ogAlt: 'smida: 스웨덴어로 ‘단련하다’. 기능성 피트니스와 하이브리드 레이스를 위한 운동 기록 앱.' },
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
    pitch: '기능성 피트니스와 하이브리드 레이스를 위한 운동 기록 앱. 타이머, 벤치마크, 개인 최고 기록(PR)까지. 도쿄의 한 박스에서 시작됐습니다.',
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
    timer: '박스에 맞춘 타이머: 카운트다운, 라운드, 휴식.',
    prs: '모든 리프트와 벤치마크의 PR 기록을 한곳에.',
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
  milestones: {
    heading: '로드맵',
    items: [
      { when: '2026년 10월', datetime: '2026-10', text: '도쿄의 한 박스에서 매일 개발하고 테스트하는 중', done: true },
      { when: '2026년 하반기', datetime: '2026', text: '우리 박스에서 Smida 베타 시작(iPhone·Android)' },
      { when: '2027년 상반기', datetime: '2027', text: '일본 출시' },
      { when: '2027년', datetime: '2027', text: '함께 운동하기: 기록 공유, 내 박스 팔로우' },
      { when: '2027년', datetime: '2027', text: '한국, 그리고 더 많은 곳으로' },
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
    nextBody: '2027년, Smida는 함께 운동하는 공간이 됩니다. 기록을 공유하고, 내 박스를 팔로우하고, 벤치마크 보드에서 내 위치를 확인할 수 있게 됩니다. 일본을 시작으로 한국, 그리고 더 많은 곳으로 넓혀 갈 예정입니다.',
  },
  support: {
    heading: '고객 지원',
    faq: [
      { q: 'Smida는 어떤 앱인가요?', a: '기능성 피트니스와 하이브리드 레이스를 위한 운동 기록 앱입니다. 타이머와 벤치마크, 개인 최고 기록(PR) 관리를 지원합니다. 도쿄의 한 박스에서 매일 개발하고 테스트하고 있습니다.' },
      { q: '베타에 참여하려면 어떻게 하나요?', a: '<a href="mailto:hello@smida.fit?subject=Smida%20beta">hello@smida.fit</a>으로 사용 중인 기기(iPhone 또는 Android)를 적어 메일을 보내 주세요. 베타는 2026년 하반기에 우리 박스에서 먼저 시작합니다.' },
      { q: '내 데이터는 어디에 저장되나요?', a: '사용 중인 기기 안에 저장됩니다. Smida에는 계정도 서버도 없기 때문에 개발자가 여러분의 운동 데이터를 볼 수 없습니다.' },
      { q: '데이터를 백업하거나 옮기려면 어떻게 하나요?', a: '앱에서 백업 파일을 내보내 원하는 곳(예: 본인의 클라우드 드라이브)에 저장하세요. 새 휴대폰에서 그 파일을 불러오면 복원됩니다.' },
    ],
    contact: '문의',
  },
};

export const ui: Record<Locale, Dict> = { en, ja, ko };
