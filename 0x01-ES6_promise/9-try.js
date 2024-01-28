export default function guardrail(mathFunction) {
  const queues = [];

  try {
    queues.push(mathFunction());
  } catch (err) {
    queues.push(String(err));
  } finally {
    queues.push('Guardrail was processed');
  }

  return queues;
}
