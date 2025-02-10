const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Fale Comigo</h2>
        <form className="space-y-4">
          <div>
            <label className="label text-sm text-neutral-content">Nome</label>
            <input type="text" placeholder="Seu nome" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="label text-sm text-neutral-content">E-mail</label>
            <input type="email" placeholder="Seu e-mail" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="label text-sm text-neutral-content">Mensagem</label>
            <textarea placeholder="Escreva sua mensagem..." className="textarea textarea-bordered w-full"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
