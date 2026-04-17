import { useState } from "react";
import { useUserForm } from "../hooks/useUserForm";
import { lazy, Suspense } from "react";

const Step1 = lazy(() => import("@/features/user/components/Step1"));
const Step2 = lazy(() => import("@/features/user/components/Step2"));
const Step3 = lazy(() => import("@/features/user/components/Step3"));

export default function MultiStepForm() {
  const form = useUserForm();
  const [step, setStep] = useState(0);
  const stepFields = [["name", "email"], ["addresses"], ["skills"]] as const;

  const next = async () => {
    const fieldsToValidate = stepFields[step];
    const valid = fieldsToValidate
      ? await form.trigger(fieldsToValidate)
      : true;
    if (!valid) return;
    setStep((s) => s + 1);
  };

  const back = () => {
    setStep((s) => s - 1);
  };

  return (
    <div>
      <h2>Step {step + 1}</h2>

      <Suspense fallback={<p>Loading step...</p>}>
        {step === 0 && <Step1 {...form} />}
        {step === 1 && <Step2 {...form} />}
        {step === 2 && <Step3 {...form} />}
      </Suspense>

      <div style={{ marginTop: 20 }}>
        <button onClick={back} disabled={step === 0}>
          Back
        </button>

        {step < 2 ? <button onClick={next}>Next</button> : null}
      </div>
    </div>
  );
}
