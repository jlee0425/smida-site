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
  a11y: { main: string; footer: string; language: string; done: string; getInvolved: string };
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
  a11y: { main: 'Main', footer: 'Footer', language: 'Language', done: 'done', getInvolved: 'Get involved' },
  nav: { features: 'Features', about: 'About', support: 'Support' },
  cta: { follow: 'Follow @smida_fit', beta: 'Join the beta', band: 'Train with us from day one.' },
  meta: {
    '': { title: 'Smida: a training log for functional fitness', description: 'A training log for functional fitness and hybrid racing: timers, benchmarks, PRs. Built at a box in Tokyo.' },
    features: { title: 'Features · Smida', description: 'What Smida does: any WOD format, strength and 1RM PRs, box timers, PR history, offline on your device, share cards. EN, JA, KO.' },
    about: { title: 'About · Smida', description: 'Smida is a training log built at a box in Tokyo: local-first, no account, made by an athlete. Smida is Swedish for to forge.' },
    support: { title: 'Support · Smida', description: 'Smida support: how to join the beta, where your data lives, and how to back it up.' },
  },
  hero: {
    story: 'smida — Swedish for <em>to forge</em>',
    pitch: 'A training log for functional fitness and hybrid racing: timers, benchmarks, PRs. Built at a box in Tokyo.',
  },
  why: {
    heading: 'Why Smida',
    lead: 'Training logs today are built for solo lifters or for gym owners. Smida is built for the athlete in the box: log any WOD fast and see your progress. Next, we want you to train <em>together</em> with your box: share results, follow your box, compare on benchmark boards.',
    values: [
      { title: 'Local-first', body: 'Your data stays on your device. It works offline, in the box.' },
      { title: 'No account needed', body: 'Open the app and train. No sign-up, no email.' },
      { title: 'Made by an athlete', body: 'Built and tested every day at a box in Tokyo.' },
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
    storyBody: "Smida started as one athlete's log, written between WODs at a box in Tokyo. Every feature is used in a real class before it ships.",
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
  a11y: { main: 'メイン', footer: 'フッター', language: '言語', done: '完了', getInvolved: '参加する' },
  nav: { features: '機能', about: 'Smidaについて', support: 'サポート' },
  cta: { follow: '@smida_fit をフォロー', beta: 'ベータに参加', band: '最初の日から、一緒に。' },
  meta: {
    '': { title: 'Smida: ファンクショナルフィットネスのためのトレーニングログ', description: 'ファンクショナルフィットネスとハイブリッドレースのためのトレーニングログ。タイマー、ベンチマーク、自己ベスト。東京のボックスで生まれました。' },
    features: { title: '機能 · Smida', description: 'ボックスでのセッションを記録するために必要なものを、すべて。じゃまなものは何もなし。' },
    about: { title: 'Smidaについて · Smida', description: 'Smida は、東京のボックスでWODの合間に書いていた、ひとりのアスリートのログから始まりました。' },
    support: { title: 'サポート · Smida', description: 'ベータへの参加方法、データの保存場所、バックアップについて。' },
  },
  hero: {
    story: 'smida — スウェーデン語で「<em>鍛える</em>」',
    pitch: 'ファンクショナルフィットネスとハイブリッドレースのためのトレーニングログ。タイマー、ベンチマーク、自己ベスト。東京のボックスで生まれました。',
  },
  why: {
    heading: 'Smida が目指すもの',
    lead: 'いまのトレーニングログは、ひとりで挙げるリフターか、ジムのオーナーのために作られています。Smida はボックスで練習するアスリートのためのアプリです。どんなWODもすばやく記録し、成長を確かめられます。そして次は、ボックスの仲間と<em>一緒に</em>：記録をシェアし、ボックスをフォローし、ベンチマークボードで競い合えるように。',
    values: [
      { title: 'ローカルファースト', body: 'データはあなたの端末に。オフラインでも、ボックスでも動きます。' },
      { title: 'アカウント不要', body: 'アプリを開けば、すぐトレーニング。登録もメールも不要です。' },
      { title: 'アスリートがつくる', body: '東京のボックスで毎日つくり、毎日テストしています。' },
    ],
  },
  look: {
    heading: 'アプリをちょっとだけ',
    today: '今日：どんなWODもすぐ記録、自己ベストもひと目で。',
    timer: 'ボックスのためのタイマー：カウントイン、ラウンド、レスト。',
    prs: '自己ベストの履歴。リフトもベンチマークも。',
    share: 'ストーリーにそのまま載せられる記録カード。',
  },
  how: {
    heading: '使い方',
    steps: [
      { title: '記録する', body: '形式を選んで、WODを数秒で入力。' },
      { title: '計る', body: 'タイマーをスタート：カウントイン、ラウンド、レスト。' },
      { title: '成長を見る', body: 'すべての記録が自己ベストの履歴に残ります。' },
      { title: 'ボックスとシェア', body: '記録カードをストーリーに投稿。' },
    ],
  },
  milestones: {
    heading: 'ロードマップ',
    items: [
      { when: '2026年10月', datetime: '2026-10', text: '東京のボックスで毎日つくり、毎日テスト', done: true },
      { when: '2026年後半', datetime: '2026', text: '私たちのボックスで Smida ベータ版(iPhone・Android)' },
      { when: '2027年前半', datetime: '2027', text: '日本でリリース' },
      { when: '2027', datetime: '2027', text: '一緒にトレーニング：記録をシェアし、ボックスをフォロー' },
      { when: '2027', datetime: '2027', text: '韓国、そしてその先へ' },
    ],
  },
  features: {
    heading: '機能',
    lead: 'ボックスでのセッションを記録するために必要なものを、すべて。じゃまなものは何もなし。',
    what: 'できること',
    items: [
      { title: 'あらゆるWOD形式', body: 'For Time、AMRAP、EMOM、Tabata、インターバル。ホワイトボードの通りに記録できます。' },
      { title: '筋力と1RMの自己ベスト', body: 'セットと重量を記録すれば、1RMの自己ベストは自動で追跡されます。' },
      { title: 'ベンチマークとレースシミュレーション', body: '定番のベンチマークWODと、ハイブリッドレースのシミュレーション。' },
      { title: 'ボックスのためのタイマー', body: 'カウントイン、ラウンド、レスト。離れていても読める表示です。' },
      { title: '自己ベストの履歴', body: 'すべてのリフトとベンチマークを、ベストを先頭に。' },
      { title: 'オフライン・端末内保存', body: 'アカウントもサーバーもなし。電波がなくても使えて、記録はあなたのもの。' },
      { title: '記録カードをシェア', body: 'ワンタップで記録をストーリー用カードに。' },
      { title: '英語・日本語・韓国語', body: 'アプリもこのサイトも3言語に対応。' },
    ],
  },
  about: {
    heading: '東京のボックスで生まれました',
    story: 'はじまり',
    storyBody: 'Smida は、東京のボックスでWODの合間に書いていた、ひとりのアスリートのログから始まりました。すべての機能は、実際のクラスで使ってからリリースしています。',
    name: '名前の由来',
    nameBody: '<em>smida</em> はスウェーデン語で「<em>鍛える</em>」。熱して、打って、繰り返す。それがトレーニングです。',
    next: 'これから',
    nextBody: '2027年、Smida は一緒にトレーニングする場所になります。記録をシェアし、ボックスをフォローし、ベンチマークボードで自分の位置を確かめる。まずは日本から、そして韓国、その先へ。',
  },
  support: {
    heading: 'サポート',
    faq: [
      { q: 'Smida とは?', a: 'ファンクショナルフィットネスとハイブリッドレースのためのトレーニングログです。タイマー、ベンチマーク、自己ベストを記録できます。東京のボックスで毎日つくり、テストしています。' },
      { q: 'ベータに参加するには?', a: '<a href="mailto:hello@smida.fit?subject=Smida%20beta">hello@smida.fit</a> まで、iPhone か Android かを添えてメールしてください。ベータは 2026 年後半、私たちのボックスから始まります。' },
      { q: 'データはどこに保存されますか?', a: 'お使いの端末内です。アカウントもサーバーもないため、開発者がトレーニングデータを見ることはありません。' },
      { q: 'バックアップや機種変更は?', a: 'アプリからバックアップファイルを書き出し、お好きな場所(ご自身のクラウドドライブなど)に保存してください。新しい端末でそのファイルを読み込めば復元できます。' },
    ],
    contact: 'お問い合わせ',
  },
};

const ko: Dict = {
  a11y: { main: '메인', footer: '푸터', language: '언어', done: '완료', getInvolved: '참여하기' },
  nav: { features: '기능', about: '소개', support: '고객 지원' },
  cta: { follow: '@smida_fit 팔로우', beta: '베타 참여하기', band: '첫날부터 함께 훈련해요.' },
  meta: {
    '': { title: 'Smida: 기능성 피트니스를 위한 트레이닝 로그', description: '기능성 피트니스와 하이브리드 레이스를 위한 트레이닝 로그. 타이머, 벤치마크, 개인 기록(PR). 도쿄의 박스에서 만들었습니다.' },
    features: { title: '기능 · Smida', description: '박스에서 세션을 기록하는 데 필요한 모든 것. 방해되는 것은 없습니다.' },
    about: { title: '소개 · Smida', description: 'Smida는 도쿄의 박스에서 WOD 사이사이 기록하던 한 선수의 로그에서 시작했습니다.' },
    support: { title: '고객 지원 · Smida', description: '베타 참여 방법, 데이터 저장 위치, 백업 방법을 안내합니다.' },
  },
  hero: {
    story: 'smida — 스웨덴어로 ‘<em>단련하다</em>’',
    pitch: '기능성 피트니스와 하이브리드 레이스를 위한 트레이닝 로그. 타이머, 벤치마크, 개인 기록(PR). 도쿄의 박스에서 만들었습니다.',
  },
  why: {
    heading: 'Smida가 하려는 것',
    lead: '지금의 트레이닝 로그는 혼자 운동하는 리프터나 체육관 운영자를 위해 만들어졌습니다. Smida는 박스에서 운동하는 선수를 위한 앱입니다. 어떤 WOD든 빠르게 기록하고 성장을 확인하세요. 다음 목표는 박스와 <em>함께</em> 훈련하는 것: 기록을 공유하고, 내 박스를 팔로우하고, 벤치마크 보드에서 겨루는 것입니다.',
    values: [
      { title: '로컬 우선', body: '데이터는 내 기기에. 오프라인에서도, 박스에서도 작동합니다.' },
      { title: '계정 필요 없음', body: '앱을 열고 바로 훈련하세요. 가입도, 이메일도 필요 없습니다.' },
      { title: '선수가 만듭니다', body: '도쿄의 박스에서 매일 만들고, 매일 테스트합니다.' },
    ],
  },
  look: {
    heading: '미리 보기',
    today: '오늘: 어떤 WOD든 바로 기록하고, PR도 한눈에.',
    timer: '박스를 위한 타이머: 카운트인, 라운드, 휴식.',
    prs: '모든 리프트와 벤치마크의 PR 기록.',
    share: '스토리에 바로 올릴 수 있는 기록 카드.',
  },
  how: {
    heading: '사용 방법',
    steps: [
      { title: '기록하기', body: '형식을 고르고 WOD를 몇 초 만에 입력하세요.' },
      { title: '시간 재기', body: '타이머 시작: 카운트인, 라운드, 휴식.' },
      { title: '성장 확인하기', body: '모든 기록이 PR 기록에 쌓입니다.' },
      { title: '박스와 공유하기', body: '기록 카드를 스토리에 올리세요.' },
    ],
  },
  milestones: {
    heading: '로드맵',
    items: [
      { when: '2026년 10월', datetime: '2026-10', text: '도쿄의 박스에서 매일 만들고, 매일 테스트', done: true },
      { when: '2026년 하반기', datetime: '2026', text: '우리 박스와 함께하는 Smida 베타(iPhone·Android)' },
      { when: '2027년 상반기', datetime: '2027', text: '일본 출시' },
      { when: '2027', datetime: '2027', text: '함께 훈련하기: 기록을 공유하고, 내 박스를 팔로우' },
      { when: '2027', datetime: '2027', text: '한국 출시, 그리고 그 다음' },
    ],
  },
  features: {
    heading: '기능',
    lead: '박스에서 세션을 기록하는 데 필요한 모든 것. 방해되는 것은 없습니다.',
    what: '할 수 있는 것',
    items: [
      { title: '모든 WOD 형식', body: 'For Time, AMRAP, EMOM, Tabata, 인터벌. 화이트보드에 적힌 그대로 기록하세요.' },
      { title: '근력과 1RM PR', body: '세트와 무게를 기록하면 1RM PR은 자동으로 추적됩니다.' },
      { title: '벤치마크와 레이스 시뮬레이션', body: '대표적인 벤치마크 WOD와 하이브리드 레이스 시뮬레이션.' },
      { title: '박스를 위한 타이머', body: '카운트인, 라운드, 휴식. 멀리서도 잘 보입니다.' },
      { title: 'PR 기록', body: '모든 리프트와 벤치마크를, 최고 기록을 맨 위에.' },
      { title: '오프라인, 내 기기에 저장', body: '계정도 서버도 없습니다. 신호가 없어도 작동하고, 기록은 온전히 내 것입니다.' },
      { title: '기록 카드 공유', body: '한 번의 탭으로 기록을 스토리용 카드로.' },
      { title: '영어·일본어·한국어', body: '앱과 이 사이트 모두 3개 언어를 지원합니다.' },
    ],
  },
  about: {
    heading: '도쿄의 박스에서 태어났습니다',
    story: '이야기',
    storyBody: 'Smida는 도쿄의 박스에서 WOD 사이사이 기록하던 한 선수의 로그에서 시작했습니다. 모든 기능은 실제 수업에서 써 본 뒤에 내놓습니다.',
    name: '이름의 뜻',
    nameBody: '<em>smida</em>는 스웨덴어로 ‘<em>단련하다</em>’라는 뜻입니다. 달구고, 두드리고, 반복하기. 그것이 훈련입니다.',
    next: '앞으로',
    nextBody: '2027년, Smida는 함께 훈련하는 공간이 됩니다. 기록을 공유하고, 내 박스를 팔로우하고, 벤치마크 보드에서 내 위치를 확인하세요. 일본에서 시작해 한국, 그리고 그 너머로.',
  },
  support: {
    heading: '고객 지원',
    faq: [
      { q: 'Smida가 무엇인가요?', a: '기능성 피트니스와 하이브리드 레이스를 위한 트레이닝 로그입니다. 타이머, 벤치마크, 개인 기록(PR)을 남길 수 있습니다. 도쿄의 박스에서 매일 만들고 테스트하고 있습니다.' },
      { q: '베타에 참여하려면 어떻게 하나요?', a: '<a href="mailto:hello@smida.fit?subject=Smida%20beta">hello@smida.fit</a> 주소로 iPhone과 Android 중 어떤 기기를 쓰시는지 적어 메일을 보내 주세요. 베타는 2026년 하반기, 우리 박스에서 시작합니다.' },
      { q: '내 데이터는 어디에 있나요?', a: '사용 중인 기기 안에 있습니다. Smida에는 계정도 서버도 없어서 개발자가 여러분의 훈련 데이터를 볼 수 없습니다.' },
      { q: '데이터를 백업하거나 옮기려면 어떻게 하나요?', a: '앱에서 백업 파일을 내보내 원하는 곳(예: 본인의 클라우드 드라이브)에 저장하세요. 새 휴대폰에서 그 파일을 불러오면 복원됩니다.' },
    ],
    contact: '문의',
  },
};

export const ui: Record<Locale, Dict> = { en, ja, ko };
