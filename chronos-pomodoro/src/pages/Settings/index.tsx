import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, pausas, descanso curto
          e descanso longo
        </p>
      </Container>

      <Container>
        <form action="form">
          <div className="formRow">
            <DefaultInput id="workTime" labelText="foco" />
          </div>
          <div className="formRow">
            <DefaultInput id="shortBreakTime" labelText="Descanso curto" />
          </div>
          <div className="formRow">
            <DefaultInput id="longBreakTime" labelText="Descanso longo" />
          </div>

          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Guardar Configuraçoes"
              title="Guardar Configuraçoes"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
