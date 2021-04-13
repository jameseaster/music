// Dependency Imports
import clsx from "clsx";
// Ant Design
import { Card } from "antd";
// Components
import { EmailForm } from "../components/EmailForm";
// Hooks
import { useCurrentBreakpoint } from "../hooks";

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
  const { breakpoint: bp } = useCurrentBreakpoint();

  return (
    <div className="pages-container">
      <div
        className={clsx("contact-container", "fade-in", {
          [`${bp}-height`]: bp.length,
        })}
      >
        <Card className="card-style">
          <EmailForm />
        </Card>
      </div>
    </div>
  );
};
