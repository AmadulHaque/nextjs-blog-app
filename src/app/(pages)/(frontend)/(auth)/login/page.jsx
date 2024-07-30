
import IllustrationHero from "@/app/components/UI/Icons/IllustrationHero";
import LoginForm from '@/app/components/Auth/LoginForm';

export const metadata = {
  title: "MyBlog || Login",
  description: "MyBlog || Login"
};

export default async function Login() {

  return (
    <>
      <section className="ccmpi">
        <div className="c1or4 cbm4u cv89m c9epx cfj2j" aria-hidden="true">
          <IllustrationHero />
        </div>
        <div className="c0xm3 ccmpi cwd8x cbv9p cffqt">
          <div className="crett ckxfr cqmr5 cd3md">
            <div className="ca2yl cfeqe cbv9p">
              <h1 className="cv8nv crm28 cdp3t cm97t c7ur1 cv5ei cjniy cqmr5 chc94">Login</h1>
            </div>
            <div className="cg2hf cbv9p">
                <LoginForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
