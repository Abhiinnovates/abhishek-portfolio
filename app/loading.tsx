export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center animate-pulse">
          <span className="font-display font-bold text-white text-sm">AR</span>
        </div>

        {/* Spinner */}
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 rounded-full border-2 border-border" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent animate-spin" />
        </div>

        <p className="font-mono text-xs text-muted tracking-widest uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
