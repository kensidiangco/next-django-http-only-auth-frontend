import Layout from '../hocs/Layout'

const homePage = () => (
  <Layout
    title="httpOnly Auth | Home"
    content="Home page"
  >
    <div className="p-5 bg-light rounded-3">
      <div className="containter-fluid py-3">
        <h1 className="display-5 fw-bold">home</h1>
        <p className="fs-4 mt-3">
          Welcome to the httpOnly Auth tutorial site!
        </p>
      </div>
    </div>
  </Layout>
);

export default homePage;