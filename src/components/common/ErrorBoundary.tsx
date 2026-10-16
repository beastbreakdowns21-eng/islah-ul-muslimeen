import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[50vh] flex items-center justify-center p-6 bg-[#F7F9FC]">
          <div className="max-w-md w-full bg-white rounded-2xl p-6 sm:p-8 border border-[#EEF2F7] shadow-lg text-center">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#12247A] mb-2">
              Something went wrong / کوئی تکنیکی مسئلہ پیش آیا
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mb-6 leading-relaxed">
              We apologize for this inconvenience. The requested page or resource could not be rendered.
            </p>
            <button
              type="button"
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#002FA7] text-white text-xs sm:text-sm font-semibold hover:bg-[#12247A] transition-colors shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Return to Homepage / صفحۂ اول پر جائیں</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
