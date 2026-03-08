export class Pix {
  private key: string;
  private name: string;
  private city: string;
  private transactionId: string;
  private amount: string | null;

  constructor(key: string, name: string, city: string, amount: string | null = null, transactionId: string = '***') {
    this.key = key.replace(/\D/g, '');
    this.name = name.substring(0, 25);
    this.city = city.substring(0, 15);
    this.amount = amount;
    this.transactionId = transactionId;
  }

  private formatField(id: string, value: string): string {
    const len = value.length.toString().padStart(2, '0');
    return `${id}${len}${value}`;
  }

  private getCRC16(payload: string): string {
    function crc16ccitt(text: string) {
      let crc = 0xFFFF;
      for (let c = 0; c < text.length; c++) {
        crc ^= text.charCodeAt(c) << 8;
        for (let i = 0; i < 8; i++) {
          if (crc & 0x8000) {
            crc = (crc << 1) ^ 0x1021;
          } else {
            crc = crc << 1;
          }
        }
      }
      return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
    }
    return crc16ccitt(payload + '6304');
  }

  public getPayload(): string {
    const merchantAccountInfo = [
      this.formatField('00', 'br.gov.bcb.pix'),
      this.formatField('01', this.key)
    ].join('');

    const payloadItems = [
      this.formatField('00', '01'),
      this.formatField('26', merchantAccountInfo),
      this.formatField('52', '0000'),
      this.formatField('53', '986'),
    ];

    if (this.amount) {
      payloadItems.push(this.formatField('54', this.amount));
    }

    payloadItems.push(
      this.formatField('58', 'BR'),
      this.formatField('59', this.name),
      this.formatField('60', this.city),
      this.formatField('62', this.formatField('05', this.transactionId))
    );

    const payload = payloadItems.join('');

    return `${payload}6304${this.getCRC16(payload)}`;
  }
}
