import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const posts = [
  { id: "1", title: "第一篇文章", excerpt: "這是第一篇文章的摘要", content: "這是第一篇文章的完整內容，風格柔和、閱讀輕鬆。" },
  { id: "2", title: "第二篇文章", excerpt: "這是第二篇文章的摘要", content: "這是第二篇文章的完整內容，適合展示部落格內頁。" }
];

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <header className="bg-white shadow-sm rounded-b-2xl">
        <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">🌿 我的部落格</Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-6">{children}</main>
    </div>
  );
}

function Home() {
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`} className="block bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-slate-500">{post.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}

function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  if (!post) return <div>文章不存在</div>;

  return (
    <article className="bg-white p-8 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-slate-600">{post.content}</p>
    </article>
  );
}

export default function App() {
  return (
    <Router basename="/<repo-name>/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}