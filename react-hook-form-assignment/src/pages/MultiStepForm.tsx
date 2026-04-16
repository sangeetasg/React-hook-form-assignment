import { useState } from "react";
import { useUserForm } from "../hooks/useUserForm";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";

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

      {step === 0 && <Step1 {...form} />}
      {step === 1 && <Step2 {...form} />}
      {step === 2 && <Step3 {...form} />}

      <div style={{ marginTop: 20 }}>
        <button onClick={back} disabled={step === 0}>
          Back
        </button>

        {step < 2 ? <button onClick={next}>Next</button> : null}
      </div>
    </div>
  );
}
