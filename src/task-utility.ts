type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

type EditingPost = Partial<Post>; // すべてのプロパティがオプショナルになる

type SummaryPost = Pick<Post, 'id' | 'title'>; // idとtitleのみを持つ型

type CompletedPost = Readonly<Post>;   // すべてのプロパティが読み取り専用になる

console.log('--- EditingPost ---');
const editingPost: EditingPost = { title: '編集中の投稿' };
console.log(editingPost);
console.log('--- SummaryPost ---');
const summaryPost: SummaryPost = { id: 1, title: '投稿の概要' };
console.log(summaryPost);
console.log('--- CompletedPost ---');
const completedPost: CompletedPost = {
 id: 2,
 title: '公開済みの投稿',
 body: '本文',
 published: true,
};
console.log(completedPost);