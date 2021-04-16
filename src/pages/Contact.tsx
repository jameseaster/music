// Dependency Imports
import clsx from "clsx";
// Ant Design
import { Card, Typography } from "antd";
// Components
import { EmailForm } from "../components/EmailForm";
// Hooks
import { useCurrentBreakpoint, useMobileFormatting } from "../hooks";
// Constants
const { Title } = Typography;

/**
 * Contact Page
 *
 * TODO: update description
 *
 * Contact is a form that allows webpage visitors to send an
 * inquery via email to me directly
 */
export const Contact: React.FC<{}> = () => {
  // Hooks
  const mobileLayout = useMobileFormatting();
  const { breakpoint: bp } = useCurrentBreakpoint();

  return (
    <div className="pages-container">
      <div
        className={clsx("contact-container", "fade-in", {
          [`${bp}-height`]: bp.length,
        })}
      >
        <div
          className="contact-text-container"
          style={{ width: "325px", margin: "24px" }}
        >
          <Title level={5}>
            I'm excited to share a lot of new music in 2021. Feel free to write
            me anytime and thanks for checking out my website!
          </Title>
        </div>
        {/* <Title level={3} style={{ fontWeight: 300 }}>
          QUESTIONS & INQUIRIES
        </Title> */}
        <Card
          className="card-style"
          style={{ width: mobileLayout ? "300px" : "350px" }}
        >
          <EmailForm />
        </Card>
      </div>
    </div>
  );
};
